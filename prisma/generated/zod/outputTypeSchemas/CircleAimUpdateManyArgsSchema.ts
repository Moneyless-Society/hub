import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimUpdateManyMutationInputSchema } from '../inputTypeSchemas/CircleAimUpdateManyMutationInputSchema'
import { CircleAimUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CircleAimUncheckedUpdateManyInputSchema'
import { CircleAimWhereInputSchema } from '../inputTypeSchemas/CircleAimWhereInputSchema'

export const CircleAimUpdateManyArgsSchema: z.ZodType<Prisma.CircleAimUpdateManyArgs> = z.object({
  data: z.union([ CircleAimUpdateManyMutationInputSchema,CircleAimUncheckedUpdateManyInputSchema ]),
  where: CircleAimWhereInputSchema.optional(),
}).strict() ;

export default CircleAimUpdateManyArgsSchema;
