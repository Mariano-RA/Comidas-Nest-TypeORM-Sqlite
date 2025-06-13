import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlanSemanal } from './plan-semanal.entity';
import { RecetasService } from '../recetas/recetas.service';

@Injectable()
export class PlanesService {
  constructor(
    @InjectRepository(PlanSemanal)
    private readonly planRepo: Repository<PlanSemanal>,
    private readonly recetaService: RecetasService,
  ) {}

  findAll() {
    return this.planRepo.find();
  }

  findOne(id: number) {
    return this.planRepo.findOne({ where: { id } });
  }

  create(data: Partial<PlanSemanal>) {
    const plan = this.planRepo.create(data);
    return this.planRepo.save(plan);
  }

  async update(id: number, data: Partial<PlanSemanal>) {
    await this.planRepo.update(id, data);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.planRepo.delete(id);
  }

  async generarPlanSemanal() {
    const recetas = await this.recetaService.findAll();

    const principales = recetas.filter((r) => r.guarnicion == false);
    const guarniciones = recetas.filter((r) => r.guarnicion == true);

    const dias = [
      'lunes',
      'martes',
      'miércoles',
      'jueves',
      'viernes',
      'sábado',
      'domingo',
    ];
    const comidas = {};

    for (const dia of dias) {
      comidas[dia] = {
        almuerzo: this.generarComidaAleatoria(principales, guarniciones),
        cena: this.generarComidaAleatoria(principales, guarniciones),
      };
    }

    const nuevoPlan = this.planRepo.create({
      semana: new Date().toISOString().split('T')[0],
      comidas: comidas,
    });

    return this.planRepo.save(nuevoPlan);
  }

  async cambiarComida(planId: number, dia: string, comida: string) {
    const plan = await this.planRepo.findOne({ where: { id: planId } });
    if (!plan || !plan.comidas[dia]) {
      throw new Error('Día o plan no válido');
    }

    const recetas = await this.recetaService.findAll();
    const principales = recetas.filter((r) => r.guarnicion == false);
    const guarniciones = recetas.filter((r) => r.guarnicion == true);

    plan.comidas[dia][comida] = this.generarComidaAleatoria(
      principales,
      guarniciones,
    );

    return this.planRepo.save(plan);
  }

  private generarComidaAleatoria(principales, guarniciones) {
    const principal = principales.length
      ? this.seleccionarAleatorio(principales)
      : null;
    const guarnicion = guarniciones.length
      ? this.seleccionarAleatorio(guarniciones)
      : null;

    return {
      principal: principal
        ? { id: principal.id, nombre: principal.nombre }
        : null,
      guarnicion: guarnicion
        ? { id: guarnicion.id, nombre: guarnicion.nombre }
        : null,
    };
  }

  private seleccionarAleatorio(lista: any[]) {
    return lista[Math.floor(Math.random() * lista.length)];
  }
}
