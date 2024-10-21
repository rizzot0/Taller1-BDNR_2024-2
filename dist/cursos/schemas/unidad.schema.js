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
exports.UnidadSchema = exports.Unidad = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const clases_schema_1 = require("./clases.schema");
let Unidad = class Unidad extends mongoose_2.Document {
};
exports.Unidad = Unidad;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Unidad.prototype, "numero_orden", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Unidad.prototype, "nombre", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [clases_schema_1.ClaseSchema] }),
    __metadata("design:type", Array)
], Unidad.prototype, "clases", void 0);
exports.Unidad = Unidad = __decorate([
    (0, mongoose_1.Schema)()
], Unidad);
exports.UnidadSchema = mongoose_1.SchemaFactory.createForClass(Unidad);
//# sourceMappingURL=unidad.schema.js.map