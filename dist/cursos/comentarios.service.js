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
exports.ComentariosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const comentario_schema_1 = require("./schemas/comentario.schema");
const curso_schema_1 = require("./schemas/curso.schema");
const clase_schema_1 = require("./schemas/clase.schema");
let ComentariosService = class ComentariosService {
    constructor(comentarioModel, cursoModel, claseModel) {
        this.comentarioModel = comentarioModel;
        this.cursoModel = cursoModel;
        this.claseModel = claseModel;
    }
    async create(createComentarioDto) {
        const newComentario = await this.comentarioModel.create(createComentarioDto);
        const idRelacion = new mongoose_2.Types.ObjectId(createComentarioDto.idrelacion);
        const curso = await this.cursoModel.findById(idRelacion);
        if (curso) {
            curso.comentarios.push(newComentario._id);
            await curso.save();
        }
        else {
            const clase = await this.claseModel.findById(idRelacion);
            if (clase) {
                clase.comentarios.push(newComentario._id);
                await clase.save();
            }
            else {
                throw new common_1.NotFoundException(`Curso o Clase con ID ${createComentarioDto.idrelacion} no encontrado`);
            }
        }
        return newComentario;
    }
    async findAll() {
        return this.comentarioModel.find().exec();
    }
    async findOne(id) {
        const comentario = await this.comentarioModel.findById(id).exec();
        if (!comentario) {
            throw new common_1.NotFoundException(`Comentario con ID ${id} no encontrado`);
        }
        return comentario;
    }
    async update(id, updateComentarioDto) {
        const updatedComentario = await this.comentarioModel
            .findByIdAndUpdate(id, updateComentarioDto, { new: true })
            .exec();
        if (!updatedComentario) {
            throw new common_1.NotFoundException(`Comentario con ID ${id} no encontrado`);
        }
        return updatedComentario;
    }
    async remove(id) {
        const result = await this.comentarioModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Comentario con ID ${id} no encontrado`);
        }
    }
};
exports.ComentariosService = ComentariosService;
exports.ComentariosService = ComentariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(comentario_schema_1.Comentario.name)),
    __param(1, (0, mongoose_1.InjectModel)(curso_schema_1.Curso.name)),
    __param(2, (0, mongoose_1.InjectModel)(clase_schema_1.Clase.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], ComentariosService);
//# sourceMappingURL=comentarios.service.js.map