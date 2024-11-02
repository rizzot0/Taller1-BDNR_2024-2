import { ComentariosService } from './comentarios.service';
import { CreateComentarioDto } from './dto/create-comentario.dto';
export declare class ComentariosController {
    private readonly comentariosService;
    constructor(comentariosService: ComentariosService);
    create(createComentarioDto: CreateComentarioDto): Promise<import("./schemas/comentario.schema").Comentario>;
    findAll(): Promise<import("./schemas/comentario.schema").Comentario[]>;
    findOne(id: string): Promise<import("./schemas/comentario.schema").Comentario>;
    update(id: string, updateComentarioDto: CreateComentarioDto): Promise<import("./schemas/comentario.schema").Comentario>;
    remove(id: string): Promise<void>;
}
