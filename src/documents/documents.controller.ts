import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
  Body,
} from '@nestjs/common';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentsService } from './documents.service';
import { UploadDocumentDto } from './dto/upload.dto';

@Controller('documents')
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File): Promise<any> {
    console.log(file);
    return this.documentsService.create(file);
  }

  @Get('upload')
  async findAll(): Promise<any> {
    return await this.documentsService.findAll();
  }

  @Get()
  getHello(): string {
    return this.documentsService.getHello();
  }
}
