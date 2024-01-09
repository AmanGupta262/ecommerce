import 'dotenv/config';

import { Options } from 'sequelize';

import { logger } from '../../utils/loggers/logger';

const { DB_DB, DB_HOST, DB_PASS, DB_USER } = process.env;

const config: Options = {
  database: DB_DB,
  dialect: 'postgres',
  host: DB_HOST,
  password: DB_PASS,
  username: DB_USER,
  logging: (sql) => logger.debug(sql),
  logQueryParameters: true,
};

export default config;
