import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimEditsUpdateManyMutationInputSchema } from '../inputTypeSchemas/CircleAimEditsUpdateManyMutationInputSchema'
import { CircleAimEditsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CircleAimEditsUncheckedUpdateManyInputSchema'
import { CircleAimEditsWhereInputSchema } from '../inputTypeSchemas/CircleAimEditsWhereInputSchema'

export const CircleAimEditsUpdateManyArgsSchema: z.ZodType<Prisma.CircleAimEditsUpdateManyArgs> = z.object({
  data: z.union([ CircleAimEditsUpdateManyMutationInputSchema,CircleAimEditsUncheckedUpdateManyInputSchema ]),
  where: CircleAimEditsWhereInputSchema.optional(),
}).strict() ;

export default CircleAimEditsUpdateManyArgsSchema;
