import { Module } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';

@Module({
  providers: [IngredientesService]
})
export class IngredientesModule {}
