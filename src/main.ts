import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

import * as compression from 'compression';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  };
  app.enableCors(options);

  const optionsAPI = new DocumentBuilder()
    .setTitle('Emergencia Medica')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('emergenciamedica')
    .build();
  const document = SwaggerModule.createDocument(app, optionsAPI);
  SwaggerModule.setup('api', app, document);

  app.use(compression());
  app.setGlobalPrefix('api/v1');

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
