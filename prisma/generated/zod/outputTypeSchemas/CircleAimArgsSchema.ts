import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimSelectSchema } from '../inputTypeSchemas/CircleAimSelectSchema';
import { CircleAimIncludeSchema } from '../inputTypeSchemas/CircleAimIncludeSchema';

export const CircleAimArgsSchema: z.ZodType<Prisma.CircleAimDefaultArgs> = z.object({
  select: z.lazy(() => CircleAimSelectSchema).optional(),
  include: z.lazy(() => CircleAimIncludeSchema).optional(),
}).strict();

export default CircleAimArgsSchema;
