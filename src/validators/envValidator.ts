import { z } from 'zod';

import { logger } from '../utils/loggers/logger';

/* eslint-disable @typescript-eslint/naming-convention */
export const envValidator = z.object({
  DB_HOST: z.string().readonly(),
  DB_USER: z.string().readonly(),
  DB_PASS: z.string().readonly(),
  DB_DB: z.string().readonly(),
  PORT: z.string().optional().readonly(),
});
/* eslint-enable @typescript-eslint/naming-convention */

try {
  envValidator.parse(process.env);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} catch (error: any) {
  logger.error('Env validation failed', error.issues);

  // Exit the system if not valid envs found
  process.exit(1);
}
