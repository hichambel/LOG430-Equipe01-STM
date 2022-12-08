import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

@Controller('utilisateurs')
export class UtilisateursController {
  constructor(private readonly utilisateursService: UtilisateursService) {}

  @Post()
  create(@Body() createUtilisateurDto: CreateUtilisateurDto) {
    return this.utilisateursService.create(createUtilisateurDto);
  }
  
  @Get()
  findAll() {
    return this.utilisateursService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.utilisateursService.findById(id);
  }

  @Get(':email')
  findByEmail(@Param('email') id: string) {
    return this.utilisateursService.findByEmail(id);
  }

  @UseGuards(AccessTokenGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUtilisateurDto: UpdateUtilisateurDto) {
    return this.utilisateursService.update(id, updateUtilisateurDto);
  }
  
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.utilisateursService.remove(id);
  }
}
