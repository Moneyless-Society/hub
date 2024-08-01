import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CirclesToRolesSelectSchema } from '../inputTypeSchemas/CirclesToRolesSelectSchema';
import { CirclesToRolesIncludeSchema } from '../inputTypeSchemas/CirclesToRolesIncludeSchema';

export const CirclesToRolesArgsSchema: z.ZodType<Prisma.CirclesToRolesDefaultArgs> = z.object({
  select: z.lazy(() => CirclesToRolesSelectSchema).optional(),
  include: z.lazy(() => CirclesToRolesIncludeSchema).optional(),
}).strict();

export default CirclesToRolesArgsSchema;
