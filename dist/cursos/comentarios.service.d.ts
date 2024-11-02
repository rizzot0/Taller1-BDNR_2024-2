import { Model } from 'mongoose';
import { Comentario } from './schemas/comentario.schema';
import { Curso } from './schemas/curso.schema';
import { Clase } from './schemas/clase.schema';
import { CreateComentarioDto } from './dto/create-comentario.dto';
export declare class ComentariosService {
    private readonly comentarioModel;
    private readonly cursoModel;
    private readonly claseModel;
    constructor(comentarioModel: Model<Comentario>, cursoModel: Model<Curso>, claseModel: Model<Clase>);
    create(createComentarioDto: CreateComentarioDto): Promise<Comentario>;
    findAll(): Promise<Comentario[]>;
    findOne(id: string): Promise<Comentario>;
    update(id: string, updateComentarioDto: CreateComentarioDto): Promise<Comentario>;
    remove(id: string): Promise<void>;
}
