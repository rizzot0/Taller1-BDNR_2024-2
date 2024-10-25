import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './schemas/cursos.schema';
import { Unidad } from './schemas/unidad.schema';  // Importamos Unidad
import { Clase } from './schemas/clases.schema';    // Importamos Clase
import { Comentario } from './schemas/comentarios.schema';  // Importamos Comentario
import { CreateCursoDto } from './dto/createCurso.dto';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  // Obtener todos los cursos
  @Get()
  async getAllCursos(): Promise<Curso[]> {
    return this.cursosService.getAllCursos();
  }

  // Obtener detalles de un curso
  @Get(':id')
  async getCursoById(@Param('id') id: string): Promise<Curso> {
    return this.cursosService.getCursoById(id);
  }

  @Post()
  async createCurso(@Body() createCursoDto: CreateCursoDto): Promise<Curso> {
    return this.cursosService.createCurso(createCursoDto);
  }

  // Actualizar un curso
  @Put(':id')
  async updateCurso(
    @Param('id') id: string,
    @Body() updateData: Partial<Curso>,
  ): Promise<Curso> {
    return this.cursosService.updateCurso(id, updateData);
  }

  // Eliminar un curso
  @Delete(':id')
  async deleteCurso(@Param('id') id: string): Promise<void> {
    return this.cursosService.deleteCurso(id);
  }

  // Obtener solo las unidades de un curso
  @Get(':id/unidades')
  async getUnidadesByCursoId(@Param('id') id: string): Promise<Unidad[]> {
    const curso = await this.cursosService.getCursoById(id);
    if (!curso) {
      throw new NotFoundException('Curso no encontrado');
    }
    return curso.unidades;
  }

  // Obtener solo las clases de una unidad específica
  @Get(':cursoId/unidades/:unidadId/clases')
  async getClasesByUnidad(
    @Param('cursoId') cursoId: string,
    @Param('unidadId') unidadId: string
  ): Promise<Clase[]> {
    const curso = await this.cursosService.getCursoById(cursoId);
    const unidad = curso.unidades.find(unidad => unidad._id.toString() === unidadId);
    if (!unidad) {
      throw new NotFoundException('Unidad no encontrada');
    }
    return unidad.clases;
  }

  // Obtener solo los comentarios de un curso
  @Get(':id/comentarios')
  async getComentariosByCursoId(@Param('id') id: string): Promise<Comentario[]> {
    const curso = await this.cursosService.getCursoById(id);
    if (!curso) {
      throw new NotFoundException('Curso no encontrado');
    }
    return curso.comentarios;
  }
}
