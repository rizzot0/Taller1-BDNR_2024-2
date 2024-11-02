import { Model, Types } from 'mongoose';
import { Clase } from './schemas/clase.schema';
import { CreateClaseDto } from './dto/create-clase.dto';
import { UnidadesService } from './unidades.service';
export declare class ClasesService {
    private readonly claseModel;
    private readonly unidadesService;
    constructor(claseModel: Model<Clase>, unidadesService: UnidadesService);
    create(createClaseDto: CreateClaseDto): Promise<Clase>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Clase> & Clase & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Clase> & Clase & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, updateClaseDto: CreateClaseDto): Promise<import("mongoose").Document<unknown, {}, Clase> & Clase & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, Clase> & Clase & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    addComentarioToClase(claseId: string, comentarioId: Types.ObjectId): Promise<void>;
}
