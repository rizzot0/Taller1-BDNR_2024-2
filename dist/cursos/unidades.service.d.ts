import { Model, Types } from 'mongoose';
import { Unidad } from './schemas/unidad.schema';
import { Curso } from './schemas/curso.schema';
import { CreateUnidadDto } from './dto/create-unidad.dto';
export declare class UnidadesService {
    private readonly unidadModel;
    private readonly cursoModel;
    constructor(unidadModel: Model<Unidad>, cursoModel: Model<Curso>);
    create(createUnidadDto: CreateUnidadDto): Promise<Unidad>;
    addUnidadToCurso(cursoId: Types.ObjectId, unidadId: Types.ObjectId): Promise<void>;
    findAll(): Promise<Unidad[]>;
    findOne(id: string): Promise<Unidad>;
    update(id: string, updateUnidadDto: CreateUnidadDto): Promise<Unidad>;
    remove(id: string): Promise<void>;
    addClaseToUnidad(unidadId: Types.ObjectId, claseId: Types.ObjectId): Promise<void>;
}
