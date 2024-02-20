import { Module, Global } from '@nestjs/common';
import { ApiConfigService } from './config.service';
import { DbConfig } from './dbConfig';
import { JwtConfig } from './jwtconfig';

@Global()
@Module({
  providers: [ApiConfigService, DbConfig, JwtConfig],
  exports: [ApiConfigService, DbConfig, JwtConfig],
})
export class SharedModule {}
