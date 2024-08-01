import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionSelectSchema } from '../inputTypeSchemas/EthicVersionSelectSchema';
import { EthicVersionIncludeSchema } from '../inputTypeSchemas/EthicVersionIncludeSchema';

export const EthicVersionArgsSchema: z.ZodType<Prisma.EthicVersionDefaultArgs> = z.object({
  select: z.lazy(() => EthicVersionSelectSchema).optional(),
  include: z.lazy(() => EthicVersionIncludeSchema).optional(),
}).strict();

export default EthicVersionArgsSchema;
