import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UtilisateurDocument = Utilisateur & Document;

@Schema()
export class Utilisateur {

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  refreshToken: string;
}

export const UtilisateurSchema = SchemaFactory.createForClass(Utilisateur);