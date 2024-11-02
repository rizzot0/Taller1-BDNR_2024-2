import { Document, Types } from 'mongoose';
export declare class Comentario extends Document {
    nombre_autor: string;
    fecha: Date;
    titulo: string;
    detalle: string;
    idrelacion: Types.ObjectId;
}
export declare const ComentarioSchema: import("mongoose").Schema<Comentario, import("mongoose").Model<Comentario, any, any, any, Document<unknown, any, Comentario> & Comentario & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Comentario, Document<unknown, {}, import("mongoose").FlatRecord<Comentario>> & import("mongoose").FlatRecord<Comentario> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
