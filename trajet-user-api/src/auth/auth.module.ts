import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenStrategy } from './strategies/accessToken.strategy';
import { RefreshTokenStrategy } from './strategies/refreshToken.strategy';
import { UtilisateursModule } from 'src/utilisateurs/utilisateurs.module';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [JwtModule.register({}), UtilisateursModule],
  controllers: [AuthController],
  providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy, ConfigService]
})
export class AuthModule {}
