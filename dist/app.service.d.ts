import { HttpService } from "@nestjs/axios";
export declare class AppService {
    private http;
    constructor(http: HttpService);
    getHello(): string;
    getAllServices(): Promise<any>;
    looper(services: any): Promise<void>;
    pingService(req: any): Promise<boolean>;
    pingServices(allServices: any): Promise<void>;
}
