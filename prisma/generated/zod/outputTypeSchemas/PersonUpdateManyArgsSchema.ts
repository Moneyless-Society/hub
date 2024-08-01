import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonUpdateManyMutationInputSchema } from '../inputTypeSchemas/PersonUpdateManyMutationInputSchema'
import { PersonUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PersonUncheckedUpdateManyInputSchema'
import { PersonWhereInputSchema } from '../inputTypeSchemas/PersonWhereInputSchema'

export const PersonUpdateManyArgsSchema: z.ZodType<Prisma.PersonUpdateManyArgs> = z.object({
  data: z.union([ PersonUpdateManyMutationInputSchema,PersonUncheckedUpdateManyInputSchema ]),
  where: PersonWhereInputSchema.optional(),
}).strict() ;

export default PersonUpdateManyArgsSchema;
