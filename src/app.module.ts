import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OgmaModule } from '@ogma/nestjs-module';

@Module({
  imports: [
    OgmaModule.forRoot({
      logLevel: 'ALL',
      // traceMethod: 'debug',
    }),
    // OgmaModule.forFeature(AppService),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
