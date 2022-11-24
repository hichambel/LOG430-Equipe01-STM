import { OnApplicationBootstrap } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";
export declare class AppService implements OnApplicationBootstrap {
    private http;
    constructor(http: HttpService);
    onApplicationBootstrap(): void;
    getAllServices(): Promise<any>;
    pingServiceByUrl(req: any): Promise<boolean>;
    pingServiceById(req: any): Promise<boolean>;
    updateDiscoveryApi(id: number, available: boolean): Promise<void>;
    pingServices(allServices: any): Promise<void>;
}
