import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';
import { CreateTrajetDto } from './dto/trajet.dto';
import { Trajet, TrajetDocument } from './schemas/trajet.shema';

@Injectable()
export class TrajetService {
  constructor(@InjectModel(Trajet.name) private trajetModel: Model<TrajetDocument>) {}

  async create(createTrajetDto: CreateTrajetDto): Promise<TrajetDocument> {
    const createdTrajet = new this.trajetModel(createTrajetDto);
    return createdTrajet.save();
  }

  async findAll(): Promise<TrajetDocument[]> {
    return this.trajetModel.find().exec();
  }

  async findByUserId(userId: string): Promise<TrajetDocument> {
    return this.trajetModel.find({ userId: userId });
  }

  remove(id: string): Promise<TrajetDocument> {
    let objectId = new ObjectId(id);
    return this.trajetModel.findByIdAndDelete(objectId).exec();
  }
}
