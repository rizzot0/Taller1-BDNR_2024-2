import { Document, Types } from 'mongoose';
export declare class Clase extends Document {
    nombre: string;
    descripcion: string;
    video_url: string;
    contenido_descargable: {
        titulo: string;
        url: string;
    }[];
    numero_orden: number;
    comentarios: Types.ObjectId[];
    me_gusta: number;
    no_me_gusta: number;
    idUnidad: Types.ObjectId;
}
export declare const ClaseSchema: import("mongoose").Schema<Clase, import("mongoose").Model<Clase, any, any, any, Document<unknown, any, Clase> & Clase & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Clase, Document<unknown, {}, import("mongoose").FlatRecord<Clase>> & import("mongoose").FlatRecord<Clase> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
