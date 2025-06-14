import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecetasModule } from './recetas/recetas.module';
import { IngredientesModule } from './ingredientes/ingredientes.module';
import { PlanesModule } from './planes/planes.module';
import { Receta } from './recetas/receta.entity';
import { Ingrediente } from './ingredientes/ingrediente.entity';
import { PlanSemanal } from './planes/plan-semanal.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // ¡Esto es clave!
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
      entities: [Receta, Ingrediente, PlanSemanal],
      synchronize: true,
    }),
    RecetasModule,
    IngredientesModule,
    PlanesModule,
  ],
})
export class AppModule {}
