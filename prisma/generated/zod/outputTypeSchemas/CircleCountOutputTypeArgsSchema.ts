import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleCountOutputTypeSelectSchema } from './CircleCountOutputTypeSelectSchema';

export const CircleCountOutputTypeArgsSchema: z.ZodType<Prisma.CircleCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CircleCountOutputTypeSelectSchema).nullish(),
}).strict();

export default CircleCountOutputTypeSelectSchema;
