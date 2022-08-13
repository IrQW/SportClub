import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from '../logging.interceptor';
import {UserModule} from "../user/user.module";
import {TariffsModule} from "../tariffs/tariffs.module";
import {ClubsModule} from "../clubs/clubs.module";
import {ActiveModule} from "../activeTariffs/active.module";
import {AdminController} from "../admin/admin.controller";
import {AdminModule} from "../admin/admin.module";

@Module({
  imports: [UserModule, TariffsModule, ClubsModule, ActiveModule, AdminModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}