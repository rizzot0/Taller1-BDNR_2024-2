import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { Curso, CursoSchema } from './schemas/cursos.schema';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI), // Conexión con variable de entorno
    MongooseModule.forFeature([{ name: Curso.name, schema: CursoSchema }])
  ],
  controllers: [CursosController],
  providers: [CursosService],
})
export class CursosModule {}
