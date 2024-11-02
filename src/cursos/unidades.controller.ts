import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UnidadesService } from './unidades.service';
import { CreateUnidadDto } from './dto/create-unidad.dto';

@Controller('unidades')
export class UnidadesController {
  constructor(private readonly unidadesService: UnidadesService) {}

  @Get()
  findAll() {
    return this.unidadesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unidadesService.findOne(id);
  }

  @Post()
  create(@Body() createUnidadDto: CreateUnidadDto) {
    return this.unidadesService.create(createUnidadDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUnidadDto: CreateUnidadDto) {
    return this.unidadesService.update(id, updateUnidadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unidadesService.remove(id);
  }
}
