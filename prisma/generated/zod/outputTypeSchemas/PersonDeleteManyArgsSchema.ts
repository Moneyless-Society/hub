import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonWhereInputSchema } from '../inputTypeSchemas/PersonWhereInputSchema'

export const PersonDeleteManyArgsSchema: z.ZodType<Prisma.PersonDeleteManyArgs> = z.object({
  where: PersonWhereInputSchema.optional(),
}).strict() ;

export default PersonDeleteManyArgsSchema;
