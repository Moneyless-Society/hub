import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicsToPersonsSelectSchema } from '../inputTypeSchemas/EthicsToPersonsSelectSchema';
import { EthicsToPersonsIncludeSchema } from '../inputTypeSchemas/EthicsToPersonsIncludeSchema';

export const EthicsToPersonsArgsSchema: z.ZodType<Prisma.EthicsToPersonsDefaultArgs> = z.object({
  select: z.lazy(() => EthicsToPersonsSelectSchema).optional(),
  include: z.lazy(() => EthicsToPersonsIncludeSchema).optional(),
}).strict();

export default EthicsToPersonsArgsSchema;
