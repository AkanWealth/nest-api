import { Module } from '@nestjs/common';
import { DocumentSchema } from './schemas/document.schema';
import { MulterModule } from '@nestjs/platform-express';
import { MongooseModule } from '@nestjs/mongoose';
import { DocumentsController } from './documents.controller';
import { DocumentsService } from './documents.service';

// MulterModule.registerAsync({
//   imports: [
//     MongooseModule.forFeature([{ name: 'Document', schema: DocumentSchema }]),
//   ],
//   useFactory() {
//     return {
//       dest: './uploads',
//     };
//   },
//   controllers: [DocumentsController],
//   providers: [DocumentsService],
// });
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Document', schema: DocumentSchema }]),
    MulterModule.register({
      dest: './upload',
    }),
  ],
  controllers: [DocumentsController],
  providers: [DocumentsService],
})
export class DocumentsModule {}
