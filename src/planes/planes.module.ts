import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // << IMPORTANTE
import { PlanesService } from './planes.service';
import { PlanesController } from './planes.controller';
import { PlanSemanal } from './plan-semanal.entity';
import { RecetasModule } from 'src/recetas/recetas.module';

@Module({
  providers: [PlanesService],
  controllers: [PlanesController],
  imports: [TypeOrmModule.forFeature([PlanSemanal]), RecetasModule],
})
export class PlanesModule {}
