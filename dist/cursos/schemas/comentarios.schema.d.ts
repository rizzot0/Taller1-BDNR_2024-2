import { Document } from 'mongoose';
export declare class Comentario extends Document {
    autor: string;
    fecha: Date;
    titulo: string;
    detalle: string;
    me_gusta: number;
    no_me_gusta: number;
}
export declare const ComentarioSchema: import("mongoose").Schema<Comentario, import("mongoose").Model<Comentario, any, any, any, Document<unknown, any, Comentario> & Comentario & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Comentario, Document<unknown, {}, import("mongoose").FlatRecord<Comentario>> & import("mongoose").FlatRecord<Comentario> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;
