export class CreateClaseDto {
    readonly numero_orden: number;
    readonly nombre: string;
    readonly descripcion?: string;
    readonly video_url?: string;
    readonly valoracion: number;
    readonly contenido_descargable?: { titulo: string; url: string }[];
  }
  
  export class CreateUnidadDto {
    readonly numero_orden: number;
    readonly nombre: string;
    readonly clases: CreateClaseDto[];
  }
  
  export class CreateCursoDto {
    readonly nombre: string;
    readonly descripcion: string;
    readonly imagen_portada?: string;
    readonly imagen_banner?: string;
    readonly unidades?: CreateUnidadDto[];
  }
  