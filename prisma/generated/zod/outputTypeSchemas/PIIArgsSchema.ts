import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PIISelectSchema } from '../inputTypeSchemas/PIISelectSchema';
import { PIIIncludeSchema } from '../inputTypeSchemas/PIIIncludeSchema';

export const PIIArgsSchema: z.ZodType<Prisma.PIIDefaultArgs> = z.object({
  select: z.lazy(() => PIISelectSchema).optional(),
  include: z.lazy(() => PIIIncludeSchema).optional(),
}).strict();

export default PIIArgsSchema;
