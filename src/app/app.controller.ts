import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Auth } from '../auth';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  @Render('index')
  index() {
    return new Auth(false);
  }

}
