export declare class CreateClaseDto {
    readonly numero_orden: number;
    readonly nombre: string;
    readonly descripcion?: string;
    readonly video_url?: string;
    readonly valoracion: number;
    readonly contenido_descargable?: {
        titulo: string;
        url: string;
    }[];
}
export declare class CreateUnidadDto {
    readonly numero_orden: number;
    readonly nombre: string;
    readonly clases: CreateClaseDto[];
}
export declare class CreateCursoDto {
    readonly nombre: string;
    readonly descripcion: string;
    readonly imagen_portada?: string;
    readonly imagen_banner?: string;
    readonly unidades?: CreateUnidadDto[];
}
