import { ClasesService } from './clases.service';
import { CreateClaseDto } from './dto/create-clase.dto';
export declare class ClasesController {
    private readonly clasesService;
    constructor(clasesService: ClasesService);
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/clase.schema").Clase> & import("./schemas/clase.schema").Clase & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/clase.schema").Clase> & import("./schemas/clase.schema").Clase & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    create(createClaseDto: CreateClaseDto): Promise<import("./schemas/clase.schema").Clase>;
    update(id: string, updateClaseDto: CreateClaseDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/clase.schema").Clase> & import("./schemas/clase.schema").Clase & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/clase.schema").Clase> & import("./schemas/clase.schema").Clase & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
