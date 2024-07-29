import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleUpdateManyMutationInputSchema } from '../inputTypeSchemas/CircleUpdateManyMutationInputSchema'
import { CircleUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CircleUncheckedUpdateManyInputSchema'
import { CircleWhereInputSchema } from '../inputTypeSchemas/CircleWhereInputSchema'

export const CircleUpdateManyArgsSchema: z.ZodType<Prisma.CircleUpdateManyArgs> = z.object({
  data: z.union([ CircleUpdateManyMutationInputSchema,CircleUncheckedUpdateManyInputSchema ]),
  where: CircleWhereInputSchema.optional(),
}).strict() ;

export default CircleUpdateManyArgsSchema;
