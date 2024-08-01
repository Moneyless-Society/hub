import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CirclesToRolesUpdateManyMutationInputSchema } from '../inputTypeSchemas/CirclesToRolesUpdateManyMutationInputSchema'
import { CirclesToRolesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CirclesToRolesUncheckedUpdateManyInputSchema'
import { CirclesToRolesWhereInputSchema } from '../inputTypeSchemas/CirclesToRolesWhereInputSchema'

export const CirclesToRolesUpdateManyArgsSchema: z.ZodType<Prisma.CirclesToRolesUpdateManyArgs> = z.object({
  data: z.union([ CirclesToRolesUpdateManyMutationInputSchema,CirclesToRolesUncheckedUpdateManyInputSchema ]),
  where: CirclesToRolesWhereInputSchema.optional(),
}).strict() ;

export default CirclesToRolesUpdateManyArgsSchema;
