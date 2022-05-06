import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import UploadDocument from '../utils/upload';

@Injectable()
export class DocumentsService {
  constructor(
    @InjectModel('Document') private readonly documentModel: Model<Document>,
  ) {}

  async findAll(): Promise<Document[]> {
    return await this.documentModel.find();
  }

  getHello(): string {
    return 'Hello World!';
  }

  async findOne(id: string): Promise<Document> {
    return await this.documentModel.findOne({ _id: id });
  }

  async create(document: any) {
    const doc = {
      link: document.path,
      type: document.type,
      providerID: document.providerID,
    };
    console.log(document.link);
    const docUpload = new UploadDocument(doc.link).parseDocument();
    console.log(docUpload);
    return docUpload;
  }

  async update(id: string, document: Document): Promise<Document> {
    return await this.documentModel.findByIdAndUpdate(id, document, {
      new: true,
    });
  }

  async delete(id: string): Promise<Document> {
    return await this.documentModel.findByIdAndRemove(id);
  }
}
