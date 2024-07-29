import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonWhereInputSchema } from '../inputTypeSchemas/PersonWhereInputSchema'
import { PersonOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PersonOrderByWithAggregationInputSchema'
import { PersonScalarFieldEnumSchema } from '../inputTypeSchemas/PersonScalarFieldEnumSchema'
import { PersonScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PersonScalarWhereWithAggregatesInputSchema'

export const PersonGroupByArgsSchema: z.ZodType<Prisma.PersonGroupByArgs> = z.object({
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithAggregationInputSchema.array(),PersonOrderByWithAggregationInputSchema ]).optional(),
  by: PersonScalarFieldEnumSchema.array(),
  having: PersonScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PersonGroupByArgsSchema;
