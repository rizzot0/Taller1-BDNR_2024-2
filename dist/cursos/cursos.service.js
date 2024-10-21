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
const cursos_schema_1 = require("./schemas/cursos.schema");
let CursosService = class CursosService {
    constructor(cursoModel) {
        this.cursoModel = cursoModel;
    }
    async getAllCursos() {
        return await this.cursoModel.find().exec();
    }
    async getCursoById(id) {
        const curso = await this.cursoModel.findById(id).exec();
        if (!curso) {
            throw new common_1.NotFoundException('Curso no encontrado');
        }
        return curso;
    }
    async createCurso(createCursoDto) {
        const createdCurso = new this.cursoModel(createCursoDto);
        return createdCurso.save();
    }
    async updateCurso(id, updateData) {
        return await this.cursoModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    }
    async deleteCurso(id) {
        const curso = await this.cursoModel.findByIdAndDelete(id).exec();
        if (!curso) {
            throw new common_1.NotFoundException('Curso no encontrado');
        }
    }
};
exports.CursosService = CursosService;
exports.CursosService = CursosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cursos_schema_1.Curso.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CursosService);
//# sourceMappingURL=cursos.service.js.map