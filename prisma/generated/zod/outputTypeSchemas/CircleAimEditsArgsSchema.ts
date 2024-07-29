import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimEditsSelectSchema } from '../inputTypeSchemas/CircleAimEditsSelectSchema';
import { CircleAimEditsIncludeSchema } from '../inputTypeSchemas/CircleAimEditsIncludeSchema';

export const CircleAimEditsArgsSchema: z.ZodType<Prisma.CircleAimEditsDefaultArgs> = z.object({
  select: z.lazy(() => CircleAimEditsSelectSchema).optional(),
  include: z.lazy(() => CircleAimEditsIncludeSchema).optional(),
}).strict();

export default CircleAimEditsArgsSchema;
