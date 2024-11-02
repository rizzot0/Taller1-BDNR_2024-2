// comentarios.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ComentariosService } from './comentarios.service';
import { ComentariosController } from './comentarios.controller';
import { Comentario, ComentarioSchema } from './schemas/comentario.schema';
import { CursosModule } from './cursos.module'; // Importa CursosModule
import { Clase, ClaseSchema } from './schemas/clase.schema'; // Asegúrate de que Clase esté incluida

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Comentario.name, schema: ComentarioSchema },
      { name: Clase.name, schema: ClaseSchema },
    ]),
    forwardRef(() => CursosModule), // Usa forwardRef para CursosModule
  ],
  controllers: [ComentariosController],
  providers: [ComentariosService],
  exports: [ComentariosService, MongooseModule], // Exporta ComentariosService y MongooseModule
})
export class ComentariosModule {}
