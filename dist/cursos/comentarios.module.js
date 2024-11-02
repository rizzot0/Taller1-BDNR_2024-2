"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentariosModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const comentarios_service_1 = require("./comentarios.service");
const comentarios_controller_1 = require("./comentarios.controller");
const comentario_schema_1 = require("./schemas/comentario.schema");
const cursos_module_1 = require("./cursos.module");
const clase_schema_1 = require("./schemas/clase.schema");
let ComentariosModule = class ComentariosModule {
};
exports.ComentariosModule = ComentariosModule;
exports.ComentariosModule = ComentariosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: comentario_schema_1.Comentario.name, schema: comentario_schema_1.ComentarioSchema },
                { name: clase_schema_1.Clase.name, schema: clase_schema_1.ClaseSchema },
            ]),
            (0, common_1.forwardRef)(() => cursos_module_1.CursosModule),
        ],
        controllers: [comentarios_controller_1.ComentariosController],
        providers: [comentarios_service_1.ComentariosService],
        exports: [comentarios_service_1.ComentariosService, mongoose_1.MongooseModule],
    })
], ComentariosModule);
//# sourceMappingURL=comentarios.module.js.map