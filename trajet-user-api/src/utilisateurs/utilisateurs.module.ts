import { Module } from '@nestjs/common';
import { UtilisateursService } from './utilisateurs.service';
import { UtilisateursController } from './utilisateurs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Utilisateur, UtilisateurSchema } from './schemas/utilisateur.shema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Utilisateur.name, schema: UtilisateurSchema }]),
  ],
  controllers: [UtilisateursController],
  providers: [UtilisateursService],
  exports: [UtilisateursService],
})
export class UtilisateursModule {}