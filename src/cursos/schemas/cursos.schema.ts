import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Unidad, UnidadSchema } from './unidad.schema';
import { Comentario, ComentarioSchema } from './comentarios.schema';

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

  @Prop({ type: [UnidadSchema] })  
  unidades: Unidad[];

  @Prop({ type: [{ usuario_id: String }] })
  usuarios_inscritos: { usuario_id: string }[];

  @Prop({ type: [ComentarioSchema] })
  comentarios: Comentario[];
}

export const CursoSchema = SchemaFactory.createForClass(Curso);
