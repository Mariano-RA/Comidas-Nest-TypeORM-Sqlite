import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComidasModule } from './comidas/comidas.module';
import { TipoComidasModule } from './tipo-comidas/tipo-comidas.module';

@Module({
  imports: [
    ComidasModule,
    TipoComidasModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'dietaDB',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
