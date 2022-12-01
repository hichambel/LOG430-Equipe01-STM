import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateUtilisateurDto } from 'src/utilisateurs/dto/create-utilisateur.dto';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  signup(@Body() createUtilisateurDto: CreateUtilisateurDto) {
    console.log('utilisateur.email : ', createUtilisateurDto.email);
    console.log('utilisateur.password : ', createUtilisateurDto.password);
    return this.authService.signUp(createUtilisateurDto);
  }

  @Post('signin')
  signin(@Body() data: AuthDto) {
    return this.authService.signIn(data);
  }

  @Get('logout')
  logout(@Req() req: Request) {
    this.authService.logout(req.user['sub']);
  }
}