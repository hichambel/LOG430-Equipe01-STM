import { HttpService } from "@nestjs/axios";
export declare class AppService {
    private http;
    constructor(http: HttpService);
    getAllServices(): Promise<any>;
    pingService(req: any): Promise<boolean>;
    updateDiscoveryApi(id: number, available: boolean): Promise<void>;
    pingServices(allServices: any): Promise<void>;
}
