import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleUpdateManyMutationInputSchema } from '../inputTypeSchemas/RoleUpdateManyMutationInputSchema'
import { RoleUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RoleUncheckedUpdateManyInputSchema'
import { RoleWhereInputSchema } from '../inputTypeSchemas/RoleWhereInputSchema'

export const RoleUpdateManyArgsSchema: z.ZodType<Prisma.RoleUpdateManyArgs> = z.object({
  data: z.union([ RoleUpdateManyMutationInputSchema,RoleUncheckedUpdateManyInputSchema ]),
  where: RoleWhereInputSchema.optional(),
}).strict() ;

export default RoleUpdateManyArgsSchema;
