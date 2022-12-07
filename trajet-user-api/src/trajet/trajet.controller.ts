import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { TrajetService } from './trajet.service';
import { CreateTrajetDto } from './dto/trajet.dto';
import { AccessTokenGuard } from 'src/common/guards/accessToken.guard';

@Controller('trajets')
export class TrajetController {
  constructor(private readonly trajetService: TrajetService) {}

  @Post()
  create(@Body() createTrajetDto: CreateTrajetDto) {
    return this.trajetService.create(createTrajetDto);
  }
  
  @Get()
  findAll() {
    return this.trajetService.findAll();
  }

  @Get(':userId')
  findById(@Param('userId') userId: string) {
    return this.trajetService.findByUserId(userId);
  }
  
  @UseGuards(AccessTokenGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trajetService.remove(id);
  }
}
