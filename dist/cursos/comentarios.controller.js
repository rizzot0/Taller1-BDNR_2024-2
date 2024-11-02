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
exports.ComentariosController = void 0;
const common_1 = require("@nestjs/common");
const comentarios_service_1 = require("./comentarios.service");
const create_comentario_dto_1 = require("./dto/create-comentario.dto");
let ComentariosController = class ComentariosController {
    constructor(comentariosService) {
        this.comentariosService = comentariosService;
    }
    create(createComentarioDto) {
        return this.comentariosService.create(createComentarioDto);
    }
    findAll() {
        return this.comentariosService.findAll();
    }
    findOne(id) {
        return this.comentariosService.findOne(id);
    }
    update(id, updateComentarioDto) {
        return this.comentariosService.update(id, updateComentarioDto);
    }
    remove(id) {
        return this.comentariosService.remove(id);
    }
};
exports.ComentariosController = ComentariosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comentario_dto_1.CreateComentarioDto]),
    __metadata("design:returntype", void 0)
], ComentariosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComentariosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComentariosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_comentario_dto_1.CreateComentarioDto]),
    __metadata("design:returntype", void 0)
], ComentariosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComentariosController.prototype, "remove", null);
exports.ComentariosController = ComentariosController = __decorate([
    (0, common_1.Controller)('comentarios'),
    __metadata("design:paramtypes", [comentarios_service_1.ComentariosService])
], ComentariosController);
//# sourceMappingURL=comentarios.controller.js.map