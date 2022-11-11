import { Module } from '@nestjs/common';
import { TipoComidasService } from './tipo-comidas.service';
import { TipoComidasController } from './tipo-comidas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoComida } from './entities/tipo-comida.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoComida])],
  controllers: [TipoComidasController],
  providers: [TipoComidasService],
})
export class TipoComidasModule {}
