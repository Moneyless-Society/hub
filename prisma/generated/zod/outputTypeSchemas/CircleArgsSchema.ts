import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleSelectSchema } from '../inputTypeSchemas/CircleSelectSchema';
import { CircleIncludeSchema } from '../inputTypeSchemas/CircleIncludeSchema';

export const CircleArgsSchema: z.ZodType<Prisma.CircleDefaultArgs> = z.object({
  select: z.lazy(() => CircleSelectSchema).optional(),
  include: z.lazy(() => CircleIncludeSchema).optional(),
}).strict();

export default CircleArgsSchema;
