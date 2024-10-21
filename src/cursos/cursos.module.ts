import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CursosService } from './cursos.service';
import { CursosController } from './cursos.controller';
import { Curso, CursoSchema } from './schemas/cursos.schema';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/taller1'), MongooseModule.forFeature([{ name: Curso.name, schema: CursoSchema }])],
  controllers: [CursosController],
  providers: [CursosService],
})
export class CursosModule {}
