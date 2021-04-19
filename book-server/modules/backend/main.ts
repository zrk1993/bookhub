/**
 * @Author: kun
 * 2019-10-25
 */
require('module-alias/register');
import { createApplication } from '@/common/application';
import { NODE_ENV } from '@/utils/enums';
import getLogger from '@/utils/log4js';
import errorHandle from '@/middleware/error-handle';
import * as koaLogger from 'koa-logger';
const path = require('path')
const views = require('koa-views')
import config from './config';
import * as router from './router';

async function main() {
  const app = await createApplication(__dirname, Object.keys(router).map(k => router[k]), {
    logger: getLogger('app'),
  });

  if (config.env === NODE_ENV.dev) {
    app.use(koaLogger());
  }

  app.use(views(path.join(__dirname,'./views'),{
    extension:'ejs'
  }))

  app.use(errorHandle());

  app.listen(config.port);
}

main();
