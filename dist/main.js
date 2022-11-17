"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const microservice = app.connectMicroservice({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [{
                    protocol: 'amqp',
                    hostname: 'rabbitmq',
                    port: 3000,
                    username: configService.get('RABBITMQ_DEFAULT_USER') || 'guest',
                    password: configService.get('RABBITMQ_DEFAULT_PASS') || 'guest',
                    vhost: 'vhost',
                }],
            queue: configService.get('RMQ_SERVICE_DISCOVERY_QUEUE') || 'service_registry_queue',
            queueOptions: {
                durable: true,
            },
        }
    }, { inheritAppConfig: true });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Health Monitor API')
        .setDescription('Swagger for the HealthMonitor API')
        .setVersion('1.0')
        .addTag('Calls for other API health')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('', app, document);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map