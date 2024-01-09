import { z } from 'zod';

import { envValidator } from '../validators/envValidator';

declare global {
  namespace NodeJS {
    // eslint-disable-next-line max-len
    // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/consistent-type-definitions, @typescript-eslint/no-empty-interface
    interface ProcessEnv extends z.infer<typeof envValidator> {}
  }
}

export {};
