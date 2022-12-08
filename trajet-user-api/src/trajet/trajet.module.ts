import { Module } from '@nestjs/common';
import { TrajetService } from './trajet.service';
import { TrajetController } from './trajet.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Trajet, TrajetSchema } from './schemas/trajet.shema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Trajet.name, schema: TrajetSchema }]),
  ],
  controllers: [TrajetController],
  providers: [TrajetService],
  exports: [TrajetService],
})
export class TrajetModule {}