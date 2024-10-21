import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { Curso } from './schemas/cursos.schema';
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
}
