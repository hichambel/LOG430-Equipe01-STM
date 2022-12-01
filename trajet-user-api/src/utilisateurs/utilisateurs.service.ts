import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUtilisateurDto } from './dto/create-utilisateur.dto';
import { UpdateUtilisateurDto } from './dto/update-utilisateur.dto';
import { Utilisateur, UtilisateurDocument } from './schemas/utilisateur.shema';

@Injectable()
export class UtilisateursService {
  constructor(@InjectModel(Utilisateur.name) private utilisateurModel: Model<UtilisateurDocument>) {}

  async create(createUtilisateurDto: CreateUtilisateurDto): Promise<UtilisateurDocument> {
    const createdUser = new this.utilisateurModel(createUtilisateurDto);
    return createdUser.save();
  }

  async findAll(): Promise<UtilisateurDocument[]> {
    return this.utilisateurModel.find().exec();
  }

  async findById(id: string): Promise<UtilisateurDocument> {
    return this.utilisateurModel.findById(id);
  }

  async findByEmail(email: string): Promise<UtilisateurDocument> {
    return this.utilisateurModel.findOne({ email }).exec();
  }

  update(id: string, updateUtilisateurDto: UpdateUtilisateurDto): Promise<UtilisateurDocument> {
    return this.utilisateurModel
      .findByIdAndUpdate(id, updateUtilisateurDto, { new: true })
      .exec();
  }

  remove(id: string): Promise<UtilisateurDocument> {
    return this.utilisateurModel.findByIdAndDelete(id).exec();
  }
}
