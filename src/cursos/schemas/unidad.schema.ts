import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Clase, ClaseSchema } from './clases.schema';

@Schema()
export class Unidad extends Document {
  @Prop({ required: true })
  numero_orden: number;

  @Prop({ required: true })
  nombre: string;

  @Prop({ type: [ClaseSchema] })
  clases: Clase[];
}

export const UnidadSchema = SchemaFactory.createForClass(Unidad);
