import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicSelectSchema } from '../inputTypeSchemas/EthicSelectSchema';
import { EthicIncludeSchema } from '../inputTypeSchemas/EthicIncludeSchema';

export const EthicArgsSchema: z.ZodType<Prisma.EthicDefaultArgs> = z.object({
  select: z.lazy(() => EthicSelectSchema).optional(),
  include: z.lazy(() => EthicIncludeSchema).optional(),
}).strict();

export default EthicArgsSchema;
