import { Sequelize } from 'sequelize';

import { logger } from '../utils/loggers/logger';

import config from './config/config';

const sequelize = new Sequelize(config);

sequelize
  .authenticate()
  .then(() => {
    logger.info('DB Connection Success!', config.database);
  })
  .catch((err) => {
    logger.error('DB Connection Error!', err);
  });

export default {
  sequelize,
  Sequelize,
};
