"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NestResponseBuilder = void 0;
const nest_response_1 = require("./nest-response");
class NestResponseBuilder {
    constructor() {
        this.response = {
            status: 200,
            headers: {},
            body: {},
        };
    }
    withStatus(status) {
        this.response.status = status;
        return this;
    }
    withHeaders(headers) {
        this.response.headers = headers;
        return this;
    }
    withBody(body) {
        this.response.body = body;
        return this;
    }
    build() {
        return new nest_response_1.NestResponse(this.response);
    }
}
exports.NestResponseBuilder = NestResponseBuilder;
//# sourceMappingURL=nest-response-builder.js.map