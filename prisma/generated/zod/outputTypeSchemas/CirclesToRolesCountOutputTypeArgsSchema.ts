import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CirclesToRolesCountOutputTypeSelectSchema } from './CirclesToRolesCountOutputTypeSelectSchema';

export const CirclesToRolesCountOutputTypeArgsSchema: z.ZodType<Prisma.CirclesToRolesCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CirclesToRolesCountOutputTypeSelectSchema).nullish(),
}).strict();

export default CirclesToRolesCountOutputTypeSelectSchema;
