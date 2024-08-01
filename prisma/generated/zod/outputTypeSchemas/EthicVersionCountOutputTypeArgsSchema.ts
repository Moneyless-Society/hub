import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionCountOutputTypeSelectSchema } from './EthicVersionCountOutputTypeSelectSchema';

export const EthicVersionCountOutputTypeArgsSchema: z.ZodType<Prisma.EthicVersionCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => EthicVersionCountOutputTypeSelectSchema).nullish(),
}).strict();

export default EthicVersionCountOutputTypeSelectSchema;
