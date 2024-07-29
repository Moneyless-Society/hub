import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleTermUpdateManyMutationInputSchema } from '../inputTypeSchemas/RoleTermUpdateManyMutationInputSchema'
import { RoleTermUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/RoleTermUncheckedUpdateManyInputSchema'
import { RoleTermWhereInputSchema } from '../inputTypeSchemas/RoleTermWhereInputSchema'

export const RoleTermUpdateManyArgsSchema: z.ZodType<Prisma.RoleTermUpdateManyArgs> = z.object({
  data: z.union([ RoleTermUpdateManyMutationInputSchema,RoleTermUncheckedUpdateManyInputSchema ]),
  where: RoleTermWhereInputSchema.optional(),
}).strict() ;

export default RoleTermUpdateManyArgsSchema;
