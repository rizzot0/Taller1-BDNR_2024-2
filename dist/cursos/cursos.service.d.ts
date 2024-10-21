import { Model } from 'mongoose';
import { Curso } from './schemas/cursos.schema';
import { CreateCursoDto } from './dto/createCurso.dto';
export declare class CursosService {
    private cursoModel;
    constructor(cursoModel: Model<Curso>);
    getAllCursos(): Promise<Curso[]>;
    getCursoById(id: string): Promise<Curso>;
    createCurso(createCursoDto: CreateCursoDto): Promise<Curso>;
    updateCurso(id: string, updateData: Partial<Curso>): Promise<Curso>;
    deleteCurso(id: string): Promise<void>;
}
