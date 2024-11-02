import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
export declare class CursosController {
    private readonly cursosService;
    constructor(cursosService: CursosService);
    findAll(): Promise<import("./schemas/curso.schema").Curso[]>;
    findOne(id: string): Promise<import("./schemas/curso.schema").Curso>;
    create(createCursoDto: CreateCursoDto): Promise<import("./schemas/curso.schema").Curso>;
    update(id: string, updateCursoDto: CreateCursoDto): Promise<import("./schemas/curso.schema").Curso>;
    remove(id: string): Promise<void>;
}
