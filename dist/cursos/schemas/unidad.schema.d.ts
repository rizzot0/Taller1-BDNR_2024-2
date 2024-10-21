import { Document } from 'mongoose';
import { Clase } from './clases.schema';
export declare class Unidad extends Document {
    numero_orden: number;
    nombre: string;
    clases: Clase[];
}
export declare const UnidadSchema: import("mongoose").Schema<Unidad, import("mongoose").Model<Unidad, any, any, any, Document<unknown, any, Unidad> & Unidad & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Unidad, Document<unknown, {}, import("mongoose").FlatRecord<Unidad>> & import("mongoose").FlatRecord<Unidad> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;
