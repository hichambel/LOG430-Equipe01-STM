import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUtilisateurDto } from 'src/utilisateurs/dto/create-utilisateur.dto';
import { UtilisateursService } from 'src/utilisateurs/utilisateurs.service';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
    constructor(
        private utilisateursService: UtilisateursService,
        private jwtService: JwtService,
        private configService: ConfigService,
    ) {}
    
    async signUp(createUtilisateurDto: CreateUtilisateurDto): Promise<any> {
        // Verifie si l'utilisateur existe
        const utilisateurExiste = await this.utilisateursService.findByEmail(
            createUtilisateurDto.email,
        );
        if (utilisateurExiste) throw new BadRequestException('User already exists');

        // Hash password
        console.log('password :', createUtilisateurDto.password);
        const hash = await this.hashData(createUtilisateurDto.password);
        const newUser = await this.utilisateursService.create({
            ...createUtilisateurDto,
            password: hash,
        });
        const tokens = await this.getTokens(newUser._id, newUser.email);
        await this.updateRefreshToken(newUser._id, tokens.refreshToken);
        return tokens;
    }

    async signIn(data: AuthDto) {
        // Verifie si l'utilisateur existe
        const utilisateur = await this.utilisateursService.findByEmail(data.email);
        
        if (!utilisateur) throw new BadRequestException('Credentials do not match');
        const passwordMatches = await argon2.verify(utilisateur.password, data.password);
        if (!passwordMatches) throw new BadRequestException('Credentials do not match');
        
        const tokens = await this.getTokens(utilisateur._id, utilisateur.email);
        await this.updateRefreshToken(utilisateur._id, tokens.refreshToken);
        
        return tokens;
    }

    async logout(utilisateurId: string) {
        return this.utilisateursService.update(utilisateurId, { refreshToken: null });
    }

    hashData(data: string) {
        return argon2.hash(data);
    }

    async updateRefreshToken(utilisateurId: string, refreshToken: string) {
        const hashedRefreshToken = await this.hashData(refreshToken);
        await this.utilisateursService.update(utilisateurId, {
            refreshToken: hashedRefreshToken,
        });
    }

    async getTokens(utilisateurId: string, email: string) {
        const [accessToken, refreshToken] = await Promise.all([
        this.jwtService.signAsync(
            {
                sub: utilisateurId,
                email,
            },
            {
                secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
                expiresIn: '15m',
            },
        ),
        this.jwtService.signAsync(
            {
                sub: utilisateurId,
                email,
            },
            {
                secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
                expiresIn: '7d',
            },
        ),
        ]);

        return {
            accessToken,
            refreshToken,
        };
    }
}