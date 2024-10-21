import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Clase extends Document {
  @Prop({ required: true })
  numero_orden: number;

  @Prop({ required: true })
  nombre: string;

  @Prop()
  descripcion: string;

  @Prop()
  video_url: string;

  @Prop({ type: [{ titulo: String, url: String }] })
  contenido_descargable: { titulo: string; url: string }[];
}

export const ClaseSchema = SchemaFactory.createForClass(Clase);
