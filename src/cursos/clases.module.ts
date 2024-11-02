// src/cursos/clases.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClasesService } from './clases.service';
import { ClasesController } from './clases.controller';
import { Clase, ClaseSchema } from './schemas/clase.schema';
import { UnidadesModule } from './unidades.module'; // Importamos UnidadesModule

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Clase.name, schema: ClaseSchema }]),
    UnidadesModule, // Agregamos UnidadesModule aquí
  ],
  controllers: [ClasesController],
  providers: [ClasesService],
})
export class ClasesModule {}
