import { Document, Types } from 'mongoose';
export declare class Unidad extends Document {
    nombre: string;
    numero_orden: number;
    idCurso: Types.ObjectId;
    clases: Types.ObjectId[];
}
export declare const UnidadSchema: import("mongoose").Schema<Unidad, import("mongoose").Model<Unidad, any, any, any, Document<unknown, any, Unidad> & Unidad & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Unidad, Document<unknown, {}, import("mongoose").FlatRecord<Unidad>> & import("mongoose").FlatRecord<Unidad> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
