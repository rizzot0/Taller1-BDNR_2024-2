import { Document } from 'mongoose';
export declare class Clase extends Document {
    numero_orden: number;
    nombre: string;
    descripcion: string;
    video_url: string;
    contenido_descargable: {
        titulo: string;
        url: string;
    }[];
}
export declare const ClaseSchema: import("mongoose").Schema<Clase, import("mongoose").Model<Clase, any, any, any, Document<unknown, any, Clase> & Clase & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Clase, Document<unknown, {}, import("mongoose").FlatRecord<Clase>> & import("mongoose").FlatRecord<Clase> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;
