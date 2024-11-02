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
exports.UnidadesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const unidad_schema_1 = require("./schemas/unidad.schema");
const curso_schema_1 = require("./schemas/curso.schema");
let UnidadesService = class UnidadesService {
    constructor(unidadModel, cursoModel) {
        this.unidadModel = unidadModel;
        this.cursoModel = cursoModel;
    }
    async create(createUnidadDto) {
        const newUnidad = new this.unidadModel({
            ...createUnidadDto,
            idCurso: new mongoose_2.Types.ObjectId(createUnidadDto.idCurso),
        });
        await newUnidad.save();
        await this.addUnidadToCurso(new mongoose_2.Types.ObjectId(createUnidadDto.idCurso), newUnidad._id);
        return newUnidad;
    }
    async addUnidadToCurso(cursoId, unidadId) {
        const curso = await this.cursoModel.findById(cursoId);
        if (!curso) {
            throw new common_1.NotFoundException(`Curso con ID ${cursoId} no encontrado`);
        }
        curso.unidades.push(unidadId);
        await curso.save();
    }
    async findAll() {
        return this.unidadModel.find().exec();
    }
    async findOne(id) {
        const unidad = await this.unidadModel.findById(id).exec();
        if (!unidad) {
            throw new common_1.NotFoundException('Unidad no encontrada');
        }
        return unidad;
    }
    async update(id, updateUnidadDto) {
        const updatedUnidad = await this.unidadModel
            .findByIdAndUpdate(id, updateUnidadDto, { new: true })
            .exec();
        if (!updatedUnidad) {
            throw new common_1.NotFoundException('Unidad no encontrada');
        }
        return updatedUnidad;
    }
    async remove(id) {
        const result = await this.unidadModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException('Unidad no encontrada');
        }
    }
    async addClaseToUnidad(unidadId, claseId) {
        const unidad = await this.unidadModel.findById(unidadId);
        if (!unidad) {
            throw new common_1.NotFoundException(`Unidad con ID ${unidadId} no encontrada`);
        }
        if (!unidad.clases.includes(claseId)) {
            unidad.clases.push(claseId);
            await unidad.save();
        }
    }
};
exports.UnidadesService = UnidadesService;
exports.UnidadesService = UnidadesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(unidad_schema_1.Unidad.name)),
    __param(1, (0, mongoose_1.InjectModel)(curso_schema_1.Curso.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], UnidadesService);
//# sourceMappingURL=unidades.service.js.map