/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComidaDto } from './dto/comidaDto.dto';
import { CreateComidaDto } from './dto/create-comida.dto';
import { UpdateComidaDto } from './dto/update-comida.dto';
import { Comida } from './entities/comida.entity';

@Injectable()
export class ComidasService {
  constructor(
    @InjectRepository(Comida)
    private readonly comidaRepository: Repository<Comida>,
  ) {}

  async create(createComidaDto: CreateComidaDto) {
    const c = await this.comidaRepository.create(createComidaDto);
    return await this.comidaRepository.save(c);
  }

  async findAll() {
    const comidas = await this.comidaRepository.find({ relations: ['tipoComida'] });
    return comidas.map(x => {
      const {idTipoComida, ...resto} = x;
      return resto as ComidaDto;
    })
  }

  async findOne(id: number){
    const comida = await this.comidaRepository.findOne({where: { id: id },relations: ['tipoComida'],});
    const {idTipoComida, ...resto} = comida;
    return resto as ComidaDto;
  }

  async findByType(tipo: number) {
    const comidas = await this.comidaRepository.find({
      where: { idTipoComida: tipo },
      relations: ['tipoComida'],
    });
    return comidas.map(x => {
      const {idTipoComida, ...resto} = x;
      return resto as ComidaDto;
    }) 
  }

  async update(id: number, updateComidaDto: UpdateComidaDto) {
    return await this.comidaRepository.update({ id: id }, updateComidaDto);
  }

  async remove(id: number) {
    return await this.comidaRepository.delete({ id: id });
  }
}
