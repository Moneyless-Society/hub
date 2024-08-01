import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleCountOutputTypeSelectSchema } from './RoleCountOutputTypeSelectSchema';

export const RoleCountOutputTypeArgsSchema: z.ZodType<Prisma.RoleCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => RoleCountOutputTypeSelectSchema).nullish(),
}).strict();

export default RoleCountOutputTypeSelectSchema;
