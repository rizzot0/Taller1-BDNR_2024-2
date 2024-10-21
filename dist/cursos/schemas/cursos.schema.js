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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CursoSchema = exports.Curso = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const unidad_schema_1 = require("./unidad.schema");
const comentarios_schema_1 = require("./comentarios.schema");
let Curso = class Curso extends mongoose_2.Document {
};
exports.Curso = Curso;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Curso.prototype, "nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Curso.prototype, "descripcion", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Curso.prototype, "imagen_portada", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Curso.prototype, "imagen_banner", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Curso.prototype, "valoracion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [unidad_schema_1.UnidadSchema] }),
    __metadata("design:type", Array)
], Curso.prototype, "unidades", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ usuario_id: String }] }),
    __metadata("design:type", Array)
], Curso.prototype, "usuarios_inscritos", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [comentarios_schema_1.ComentarioSchema] }),
    __metadata("design:type", Array)
], Curso.prototype, "comentarios", void 0);
exports.Curso = Curso = __decorate([
    (0, mongoose_1.Schema)()
], Curso);
exports.CursoSchema = mongoose_1.SchemaFactory.createForClass(Curso);
//# sourceMappingURL=cursos.schema.js.map