import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilisateursModule } from './utilisateurs/utilisateurs.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TrajetModule } from './trajet/trajet.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://user1:BestEquipe01@cluster0.dbtatb9.mongodb.net/?retryWrites=true&w=majority'),
    UtilisateursModule,
    ConfigModule.forRoot(),
    AuthModule,
    TrajetModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
