import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Curso } from './schemas/cursos.schema';
import { CreateCursoDto } from './dto/createCurso.dto';

@Injectable()
export class CursosService {
  constructor(
    @InjectModel(Curso.name) private cursoModel: Model<Curso>,
  ) {}

  // Obtener todos los cursos
  async getAllCursos(): Promise<Curso[]> {
    return await this.cursoModel.find().exec();
  }

  // Obtener detalles de un curso
  async getCursoById(id: string): Promise<Curso> {
    const curso = await this.cursoModel.findById(id).exec();
    if (!curso) {
      throw new NotFoundException('Curso no encontrado');
    }
    return curso;
  }

  async createCurso(createCursoDto: CreateCursoDto): Promise<Curso> {
    const createdCurso = new this.cursoModel(createCursoDto);
    return createdCurso.save();
  }
  

  // Actualizar curso
  async updateCurso(id: string, updateData: Partial<Curso>): Promise<Curso> {
    return await this.cursoModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }

  // Eliminar curso
  async deleteCurso(id: string): Promise<void> {
    const curso = await this.cursoModel.findByIdAndDelete(id).exec();
    if (!curso) {
      throw new NotFoundException('Curso no encontrado');
    }
  }
}
