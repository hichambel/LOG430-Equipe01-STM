import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Health Monitor API')
  .setDescription('Swagger for the HealthMonitor API')
  .setVersion('1.0')
  .addTag('Calls for other API health')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, document);

  await app.listen(3000);
}

// const microservice = app.connectMicroService({
//   transport: Transport.RMQ,
//   options: {
//     urls: [{
//       protocol: 'amqp',
//       hostname: 'rabbitmq',
//       port: 3000,
//       username: configService.get('RABBITMQ_DEFAULT_USER') || 'guest',
//       password: configService.get('RABBITMQ_DEFAULT_PASS') || 'guest',
//       vhost: 'vhost',
//     }],
//     queue: configService.get('RMQ_SERVICE_DISCOVERY_QUEUE') || 'service_registry_queue',
//     queueOptions: {
//       durable: true,
//     },
//   }
// }, { inheritAppConfig: true });

bootstrap();

