import config from './config/keys';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { DocumentsModule } from './documents/documents.module';
// import { ProductsService } from './products/products.service';
// import { ProductsController } from './products/products.controller';
// import { DocumentsController } from './documents/documents.controller';
// import { DocumentsService } from './documents/documents.service';

@Module({
  imports: [
    ProductsModule,
    DocumentsModule,
    MongooseModule.forRoot(config.mongoURI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
