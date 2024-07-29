import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CirclesToRolesWhereInputSchema } from '../inputTypeSchemas/CirclesToRolesWhereInputSchema'

export const CirclesToRolesDeleteManyArgsSchema: z.ZodType<Prisma.CirclesToRolesDeleteManyArgs> = z.object({
  where: CirclesToRolesWhereInputSchema.optional(),
}).strict() ;

export default CirclesToRolesDeleteManyArgsSchema;
