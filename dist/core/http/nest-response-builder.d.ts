import { NestResponse } from './nest-response';
export declare class NestResponseBuilder {
    private response;
    withStatus(status: number): this;
    withHeaders(headers: any): this;
    withBody(body: any): this;
    build(): NestResponse;
}
