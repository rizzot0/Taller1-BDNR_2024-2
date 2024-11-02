import { Document, Types } from 'mongoose';
export declare class Curso extends Document {
    nombre: string;
    descripcion: string;
    imagen_portada: string;
    imagen_banner: string;
    valoracion: number;
    unidades: Types.ObjectId[];
    comentarios: Types.ObjectId[];
}
export declare const CursoSchema: import("mongoose").Schema<Curso, import("mongoose").Model<Curso, any, any, any, Document<unknown, any, Curso> & Curso & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Curso, Document<unknown, {}, import("mongoose").FlatRecord<Curso>> & import("mongoose").FlatRecord<Curso> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
