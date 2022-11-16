"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let AppService = class AppService {
    constructor(http) {
        this.http = http;
    }
    async getAllServices() {
        const headersRequest = {
            'X-API-KEY': '6leXd37uYyvEjVvC5j3KBeeadyM08Zal5bwSm9gKBJgyO6cqoWa1pacWpriaASzH',
        };
        const request = await this.http
            .get('http://10.194.33.155:3000/services-registry/allServices', { headers: headersRequest })
            .pipe((0, rxjs_1.map)((res) => { return res.data; }))
            .pipe((0, rxjs_1.catchError)(() => {
            throw new common_1.ForbiddenException('API not available');
        }));
        const services = await (0, rxjs_1.firstValueFrom)(request);
        const resString = JSON.stringify(services);
        const resParsed = JSON.parse(resString);
        setInterval(() => this.pingServices(resParsed), 3000);
        return services;
    }
    async pingService(req) {
        console.log(req.name);
        const request = await this.http
            .get(req.url)
            .pipe((0, rxjs_1.map)((res) => { return res.status; }))
            .pipe((0, rxjs_1.catchError)(() => {
            throw new common_1.ForbiddenException('API not available');
        }));
        const service = await (0, rxjs_1.firstValueFrom)(request);
        const requestString = JSON.stringify(service);
        if (requestString == "200") {
            return true;
        }
        else {
            return false;
        }
    }
    async updateDiscoveryApi(id, available) {
        const headersRequest = {
            'X-API-KEY': '6leXd37uYyvEjVvC5j3KBeeadyM08Zal5bwSm9gKBJgyO6cqoWa1pacWpriaASzH',
        };
        const bodyRequest = {
            "serviceId": id,
            "status": "UP"
        };
        if (available) {
            bodyRequest.status = "UP";
        }
        else {
            bodyRequest.status = "DOWN";
        }
        await this.http
            .post('http://10.194.33.155:3000/services-registry/update-service-status', { headers: headersRequest, data: bodyRequest })
            .pipe((0, rxjs_1.catchError)(() => {
            throw new common_1.ForbiddenException('API not available');
        }));
    }
    async pingServices(allServices) {
        for (let index = 0; index < allServices.length; index++) {
            let response;
            if (allServices[index].name != "MONITORING") {
                response = this.pingService(allServices[index]);
            }
            if (!allServices[index].isAvailable && response) {
                this.updateDiscoveryApi(allServices[index].id, true);
            }
            else {
                if (allServices[index].isAvailable) {
                    this.updateDiscoveryApi(allServices[index].id, false);
                }
            }
        }
        return;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map