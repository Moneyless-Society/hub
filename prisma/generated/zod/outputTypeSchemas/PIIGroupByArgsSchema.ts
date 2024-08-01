import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PIIWhereInputSchema } from '../inputTypeSchemas/PIIWhereInputSchema'
import { PIIOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PIIOrderByWithAggregationInputSchema'
import { PIIScalarFieldEnumSchema } from '../inputTypeSchemas/PIIScalarFieldEnumSchema'
import { PIIScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PIIScalarWhereWithAggregatesInputSchema'

export const PIIGroupByArgsSchema: z.ZodType<Prisma.PIIGroupByArgs> = z.object({
  where: PIIWhereInputSchema.optional(),
  orderBy: z.union([ PIIOrderByWithAggregationInputSchema.array(),PIIOrderByWithAggregationInputSchema ]).optional(),
  by: PIIScalarFieldEnumSchema.array(),
  having: PIIScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PIIGroupByArgsSchema;
