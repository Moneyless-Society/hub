import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleEditsUpdateManyMutationInputSchema } from '../inputTypeSchemas/RoleEditsUpdateManyMutationInputSchema'
import { RoleEditsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RoleEditsUncheckedUpdateManyInputSchema'
import { RoleEditsWhereInputSchema } from '../inputTypeSchemas/RoleEditsWhereInputSchema'

export const RoleEditsUpdateManyArgsSchema: z.ZodType<Prisma.RoleEditsUpdateManyArgs> = z.object({
  data: z.union([ RoleEditsUpdateManyMutationInputSchema,RoleEditsUncheckedUpdateManyInputSchema ]),
  where: RoleEditsWhereInputSchema.optional(),
}).strict() ;

export default RoleEditsUpdateManyArgsSchema;
