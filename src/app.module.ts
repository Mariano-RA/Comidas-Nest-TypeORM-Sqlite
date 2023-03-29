import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComidasModule } from './comidas/comidas.module';

@Module({
  imports: [
    ComidasModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database:
        'e:/Mis proyectos/Comidas-Nest-TypeORM-Sqlite/src/database/Comidas.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
