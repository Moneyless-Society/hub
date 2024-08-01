import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionsToPersonsSelectSchema } from '../inputTypeSchemas/EthicVersionsToPersonsSelectSchema';
import { EthicVersionsToPersonsIncludeSchema } from '../inputTypeSchemas/EthicVersionsToPersonsIncludeSchema';

export const EthicVersionsToPersonsArgsSchema: z.ZodType<Prisma.EthicVersionsToPersonsDefaultArgs> = z.object({
  select: z.lazy(() => EthicVersionsToPersonsSelectSchema).optional(),
  include: z.lazy(() => EthicVersionsToPersonsIncludeSchema).optional(),
}).strict();

export default EthicVersionsToPersonsArgsSchema;
