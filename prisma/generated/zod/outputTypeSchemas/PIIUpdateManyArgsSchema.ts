import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PIIUpdateManyMutationInputSchema } from '../inputTypeSchemas/PIIUpdateManyMutationInputSchema'
import { PIIUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PIIUncheckedUpdateManyInputSchema'
import { PIIWhereInputSchema } from '../inputTypeSchemas/PIIWhereInputSchema'

export const PIIUpdateManyArgsSchema: z.ZodType<Prisma.PIIUpdateManyArgs> = z.object({
  data: z.union([ PIIUpdateManyMutationInputSchema,PIIUncheckedUpdateManyInputSchema ]),
  where: PIIWhereInputSchema.optional(),
}).strict() ;

export default PIIUpdateManyArgsSchema;
