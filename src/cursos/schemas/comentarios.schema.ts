import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Comentario extends Document {
  @Prop({ required: true })
  autor: string;

  @Prop({ required: true })
  fecha: Date;

  @Prop({ required: true })
  titulo: string;

  @Prop()
  detalle: string;

  @Prop({ default: 0 })
  me_gusta: number;

  @Prop({ default: 0 })
  no_me_gusta: number;
}

export const ComentarioSchema = SchemaFactory.createForClass(Comentario);
