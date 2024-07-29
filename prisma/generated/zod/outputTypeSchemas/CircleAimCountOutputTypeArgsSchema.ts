import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimCountOutputTypeSelectSchema } from './CircleAimCountOutputTypeSelectSchema';

export const CircleAimCountOutputTypeArgsSchema: z.ZodType<Prisma.CircleAimCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CircleAimCountOutputTypeSelectSchema).nullish(),
}).strict();

export default CircleAimCountOutputTypeSelectSchema;
