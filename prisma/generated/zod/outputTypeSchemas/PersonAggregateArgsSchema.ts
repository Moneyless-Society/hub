import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonWhereInputSchema } from '../inputTypeSchemas/PersonWhereInputSchema'
import { PersonOrderByWithRelationInputSchema } from '../inputTypeSchemas/PersonOrderByWithRelationInputSchema'
import { PersonWhereUniqueInputSchema } from '../inputTypeSchemas/PersonWhereUniqueInputSchema'

export const PersonAggregateArgsSchema: z.ZodType<Prisma.PersonAggregateArgs> = z.object({
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithRelationInputSchema.array(),PersonOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PersonAggregateArgsSchema;
