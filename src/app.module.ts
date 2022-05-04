import config from './config/keys';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
// import { ProductsService } from './products/products.service';
// import { ProductsController } from './products/products.controller';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
