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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getAllApisHealth() {
        return this.appService.getAllServices();
    }
    getOneApiHealthByUrl(req) {
        return this.appService.pingServiceByUrl(req);
    }
    getOneApiHealthById(id) {
        return this.appService.pingServiceById(id);
    }
    updateDiscoveryApi(body) {
        return this.appService.updateDiscoveryApi(body.serviceId, body.status);
    }
};
__decorate([
    (0, common_1.Get)("all-apis-health"),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'retourne une liste exhaustive de tous les apis en format JSON'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAllApisHealth", null);
__decorate([
    (0, common_1.Get)("api-health"),
    (0, swagger_1.ApiParam)({ name: 'url' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: '{ boolean } true si available et false sinon'
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getOneApiHealthByUrl", null);
__decorate([
    (0, common_1.Get)("api-health-by-id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getOneApiHealthById", null);
__decorate([
    (0, common_1.Post)("updateUser"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "updateDiscoveryApi", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map