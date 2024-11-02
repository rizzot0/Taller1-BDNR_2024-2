import { Model, Types } from 'mongoose';
import { CreateCursoDto } from './dto/create-curso.dto';
import { Curso } from './schemas/curso.schema';
import { Unidad } from './schemas/unidad.schema';
import { Comentario } from './schemas/comentario.schema';
export declare class CursosService {
    private readonly cursoModel;
    private readonly unidadModel;
    private readonly comentarioModel;
    constructor(cursoModel: Model<Curso>, unidadModel: Model<Unidad>, comentarioModel: Model<Comentario>);
    findAll(): Promise<Curso[]>;
    findOne(id: string): Promise<Curso>;
    create(createCursoDto: CreateCursoDto): Promise<Curso>;
    update(id: string, updateCursoDto: CreateCursoDto): Promise<Curso>;
    remove(id: string): Promise<void>;
    addUnidadToCurso(cursoId: string, unidadId: Types.ObjectId): Promise<void>;
    addComentarioToCurso(cursoId: string, comentarioId: Types.ObjectId): Promise<void>;
}
