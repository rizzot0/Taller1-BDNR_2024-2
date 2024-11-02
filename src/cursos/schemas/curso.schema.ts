import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Comentario } from './comentario.schema'; // Importa el esquema de Comentario si es necesario

@Schema()
export class Curso extends Document {
  @Prop({ required: true })
  nombre: string;

  @Prop()
  descripcion: string;

  @Prop()
  imagen_portada: string;

  @Prop()
  imagen_banner: string;

  @Prop()
  valoracion: number;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Unidad' }] })
  unidades: Types.ObjectId[]; // Array para almacenar los IDs de las unidades asociadas

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Comentario' }] })
  comentarios: Types.ObjectId[]; // Array para almacenar los IDs de los comentarios
}

export const CursoSchema = SchemaFactory.createForClass(Curso);
