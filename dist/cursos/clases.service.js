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
exports.ClasesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const clase_schema_1 = require("./schemas/clase.schema");
const unidades_service_1 = require("./unidades.service");
let ClasesService = class ClasesService {
    constructor(claseModel, unidadesService) {
        this.claseModel = claseModel;
        this.unidadesService = unidadesService;
    }
    async create(createClaseDto) {
        const unidadId = new mongoose_2.Types.ObjectId(createClaseDto.unidadId);
        const newClase = new this.claseModel({
            ...createClaseDto,
            idUnidad: unidadId,
        });
        await newClase.save();
        await this.unidadesService.addClaseToUnidad(unidadId, newClase._id);
        return newClase;
    }
    async findAll() {
        return this.claseModel.find().exec();
    }
    async findOne(id) {
        const clase = await this.claseModel.findById(id);
        if (!clase) {
            throw new common_1.NotFoundException(`Clase con ID ${id} no encontrada`);
        }
        return clase;
    }
    async update(id, updateClaseDto) {
        const updatedClase = await this.claseModel.findByIdAndUpdate(id, updateClaseDto, { new: true });
        if (!updatedClase) {
            throw new common_1.NotFoundException(`Clase con ID ${id} no encontrada`);
        }
        return updatedClase;
    }
    async remove(id) {
        const deletedClase = await this.claseModel.findByIdAndDelete(id);
        if (!deletedClase) {
            throw new common_1.NotFoundException(`Clase con ID ${id} no encontrada`);
        }
        return deletedClase;
    }
    async addComentarioToClase(claseId, comentarioId) {
        const clase = await this.claseModel.findById(claseId);
        if (!clase) {
            throw new common_1.NotFoundException(`Clase con ID ${claseId} no encontrada`);
        }
        clase.comentarios.push(comentarioId);
        await clase.save();
    }
};
exports.ClasesService = ClasesService;
exports.ClasesService = ClasesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(clase_schema_1.Clase.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        unidades_service_1.UnidadesService])
], ClasesService);
//# sourceMappingURL=clases.service.js.map