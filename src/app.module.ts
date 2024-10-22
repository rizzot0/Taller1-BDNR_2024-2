import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';  // Asegúrate de importar el ConfigModule
import { CursosModule } from './cursos/cursos.module';
import { AppController } from './app.controller';  // Importa el AppController
import { AppService } from './app.service';  // Importa el AppService

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),  // ConfigModule debe estar aquí
    MongooseModule.forRoot(process.env.MONGO_URI),
    CursosModule,
  ],
  controllers: [AppController],  // Asegúrate de incluir AppController
  providers: [AppService],  // Asegúrate de incluir AppService
})
export class AppModule {}
