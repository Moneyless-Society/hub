import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicCountOutputTypeSelectSchema } from './EthicCountOutputTypeSelectSchema';

export const EthicCountOutputTypeArgsSchema: z.ZodType<Prisma.EthicCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => EthicCountOutputTypeSelectSchema).nullish(),
}).strict();

export default EthicCountOutputTypeSelectSchema;
