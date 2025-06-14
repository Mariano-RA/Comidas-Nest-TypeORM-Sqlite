import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecetasModule } from './recetas/recetas.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { PlanesModule } from './planes/planes.module';
import { Receta } from './recetas/receta.entity';
import { Ingrediente } from './ingredientes/ingrediente.entity';
import { PlanSemanal } from './planes/plan-semanal.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Receta, Ingrediente, PlanSemanal],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false, // si tu BD lo requiere (Render lo usa)
      },
    }),
    RecetasModule,
    IngredientesModule,
    PlanesModule,
  ],
})
export class AppModule {}
