// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CursosModule } from './cursos/cursos.module';
import { UnidadesModule } from './cursos/unidades.module';
import { ClasesModule } from './cursos/clases.module';
import { ComentariosModule } from './cursos/comentarios.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/taller1BD'),
    CursosModule,
    UnidadesModule,
    ClasesModule,
    ComentariosModule,
  ],
})
export class AppModule {}
