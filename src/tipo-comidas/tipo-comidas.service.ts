import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipoComidaDto } from './dto/create-tipo-comida.dto';
import { UpdateTipoComidaDto } from './dto/update-tipo-comida.dto';
import { TipoComida } from './entities/tipo-comida.entity';

@Injectable()
export class TipoComidasService {
  constructor(
    @InjectRepository(TipoComida)
    private readonly tipoComidaRepository: Repository<TipoComida>,
  ) {}
  async create(createTipoComidaDto: CreateTipoComidaDto) {
    const tc = await this.tipoComidaRepository.create(createTipoComidaDto);
    return await this.tipoComidaRepository.save(tc);
  }

  async findAll() {
    return await this.tipoComidaRepository.find();
  }

  async findOne(id: number) {
    return await this.tipoComidaRepository.findOne({ where: { id: id } });
  }

  async update(id: number, updateTipoComidaDto: UpdateTipoComidaDto) {
    return await this.tipoComidaRepository.update(
      { id: id },
      updateTipoComidaDto,
    );
  }

  async remove(id: number) {
    return await this.tipoComidaRepository.delete({ id: id });
  }
}
