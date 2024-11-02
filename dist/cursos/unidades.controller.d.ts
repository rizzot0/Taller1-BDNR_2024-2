import { UnidadesService } from './unidades.service';
import { CreateUnidadDto } from './dto/create-unidad.dto';
export declare class UnidadesController {
    private readonly unidadesService;
    constructor(unidadesService: UnidadesService);
    findAll(): Promise<import("./schemas/unidad.schema").Unidad[]>;
    findOne(id: string): Promise<import("./schemas/unidad.schema").Unidad>;
    create(createUnidadDto: CreateUnidadDto): Promise<import("./schemas/unidad.schema").Unidad>;
    update(id: string, updateUnidadDto: CreateUnidadDto): Promise<import("./schemas/unidad.schema").Unidad>;
    remove(id: string): Promise<void>;
}
