import { Injectable } from '@nestjs/common';
import { LogAll, OgmaLogger, OgmaService } from '@ogma/nestjs-module';

@Injectable()
@LogAll()
export class AppService {
  constructor(@OgmaLogger(AppService) private readonly logger: OgmaService) {}
  getHello(): string {
    throw new Error('This is an error');
  }

  getHelloAsync(): Promise<string> {
    return new Promise((resolve, reject) => {
      reject(new Error('This is also an error'));
    });
  }
}
