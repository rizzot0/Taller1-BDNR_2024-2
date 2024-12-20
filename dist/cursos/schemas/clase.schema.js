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
exports.ClaseSchema = exports.Clase = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Clase = class Clase extends mongoose_2.Document {
};
exports.Clase = Clase;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Clase.prototype, "nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Clase.prototype, "descripcion", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Clase.prototype, "video_url", void 0);
__decorate([
    (0, mongoose_1.Prop)([{ titulo: String, url: String }]),
    __metadata("design:type", Array)
], Clase.prototype, "contenido_descargable", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Clase.prototype, "numero_orden", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [{ type: mongoose_2.Types.ObjectId, ref: 'Comentario' }] }),
    __metadata("design:type", Array)
], Clase.prototype, "comentarios", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Clase.prototype, "me_gusta", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Clase.prototype, "no_me_gusta", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Unidad', required: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], Clase.prototype, "idUnidad", void 0);
exports.Clase = Clase = __decorate([
    (0, mongoose_1.Schema)()
], Clase);
exports.ClaseSchema = mongoose_1.SchemaFactory.createForClass(Clase);
//# sourceMappingURL=clase.schema.js.map