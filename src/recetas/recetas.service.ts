import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Receta } from './receta.entity';
import { Ingrediente } from '../ingredientes/ingrediente.entity';
import { RecetaDto } from './dto/receta.dto';

@Injectable()
export class RecetasService {
  constructor(
    @InjectRepository(Receta)
    private recetaRepo: Repository<Receta>,
    @InjectRepository(Ingrediente)
    private ingredienteRepo: Repository<Ingrediente>,
  ) {}

  findAll() {
    return this.recetaRepo.find({ relations: ['ingredientes'] });
  }

  findOne(id: number) {
    return this.recetaRepo.findOne({
      where: { id },
      relations: ['ingredientes'],
    });
  }

  async create(data: Partial<Receta>) {
    const receta = this.recetaRepo.create(data);
    return this.recetaRepo.save(receta);
  }

  async createMultiple(data: Partial<RecetaDto>[]) {
    const recetas = data.map((recetaDto) => {
      return this.recetaRepo.create({
        nombre: recetaDto.nombre,
        guarnicion: recetaDto.guarnicion,
        pasos: JSON.stringify(recetaDto.pasos),
        ingredientes: recetaDto.ingredientes.map((ingrediente) =>
          this.ingredienteRepo.create(ingrediente),
        ),
      });
    });

    return this.recetaRepo.save(recetas);
  }

  async update(id: number, data: Partial<Receta>) {
    await this.recetaRepo.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    const receta = await this.recetaRepo.findOne({
      where: { id },
      relations: ['ingredientes'],
    });

    if (receta) {
      await this.ingredienteRepo.remove(receta.ingredientes);
      return this.recetaRepo.delete(id);
    }

    throw new NotFoundException('Receta no encontrada');
  }
}
