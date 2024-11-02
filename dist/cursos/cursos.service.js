"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const curso_schema_1 = require("./schemas/curso.schema");
const unidad_schema_1 = require("./schemas/unidad.schema");
const comentario_schema_1 = require("./schemas/comentario.schema");
let CursosService = class CursosService {
    constructor(cursoModel, unidadModel, comentarioModel) {
        this.cursoModel = cursoModel;
        this.unidadModel = unidadModel;
        this.comentarioModel = comentarioModel;
    }
    async findAll() {
        return this.cursoModel.find().exec();
    }
    async findOne(id) {
        const curso = await this.cursoModel.findById(id).exec();
        if (!curso) {
            throw new common_1.NotFoundException(`Curso con ID ${id} no encontrado`);
        }
        return curso;
    }
    async create(createCursoDto) {
        const nuevoCurso = new this.cursoModel(createCursoDto);
        return nuevoCurso.save();
    }
    async update(id, updateCursoDto) {
        const cursoActualizado = await this.cursoModel.findByIdAndUpdate(id, updateCursoDto, { new: true }).exec();
        if (!cursoActualizado) {
            throw new common_1.NotFoundException(`Curso con ID ${id} no encontrado`);
        }
        return cursoActualizado;
    }
    async remove(id) {
        const cursoEliminado = await this.cursoModel.findByIdAndDelete(id).exec();
        if (!cursoEliminado) {
            throw new common_1.NotFoundException(`Curso con ID ${id} no encontrado`);
        }
    }
    async addUnidadToCurso(cursoId, unidadId) {
        const curso = await this.cursoModel.findById(cursoId);
        if (!curso) {
            throw new common_1.NotFoundException(`Curso con ID ${cursoId} no encontrado`);
        }
        curso.unidades.push(unidadId);
        await curso.save();
    }
    async addComentarioToCurso(cursoId, comentarioId) {
        const curso = await this.cursoModel.findById(cursoId);
        if (!curso) {
            throw new common_1.NotFoundException(`Curso con ID ${cursoId} no encontrado`);
        }
        curso.comentarios.push(comentarioId);
        await curso.save();
    }
};
exports.CursosService = CursosService;
exports.CursosService = CursosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(curso_schema_1.Curso.name)),
    __param(1, (0, mongoose_1.InjectModel)(unidad_schema_1.Unidad.name)),
    __param(2, (0, mongoose_1.InjectModel)(comentario_schema_1.Comentario.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], CursosService);
//# sourceMappingURL=cursos.service.js.map