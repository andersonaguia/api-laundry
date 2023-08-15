"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./modules/app/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const PORT = configService.get('port') || 3003;
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true
    }));
    await app.listen(PORT).then(() => {
        common_1.Logger.log(`Server is running on port ${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map