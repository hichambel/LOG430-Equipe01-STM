import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrajetDocument = Trajet & Document;

@Schema()
export class Trajet {

  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  destination: string;

  @Prop({ required: true })
  depart: string;
  
  @Prop({ required: true })
  userId: string;
  
  @Prop()
  refreshToken: string;
}

export const TrajetSchema = SchemaFactory.createForClass(Trajet);