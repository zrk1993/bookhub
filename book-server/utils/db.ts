/**
 * @Author: kun
 */

import { DBM } from '@/common/dbm';
import getLogger from './log4js';

const logger = getLogger('db.ts');

const orm = new DBM({
  connectionLimit: 10,
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Mysql@123456',
  database: 'pay',
  isDebug: false,
});

orm.setLogger(logger as any);

export default orm;
