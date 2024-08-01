import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PIIWhereInputSchema } from '../inputTypeSchemas/PIIWhereInputSchema'
import { PIIOrderByWithRelationInputSchema } from '../inputTypeSchemas/PIIOrderByWithRelationInputSchema'
import { PIIWhereUniqueInputSchema } from '../inputTypeSchemas/PIIWhereUniqueInputSchema'

export const PIIAggregateArgsSchema: z.ZodType<Prisma.PIIAggregateArgs> = z.object({
  where: PIIWhereInputSchema.optional(),
  orderBy: z.union([ PIIOrderByWithRelationInputSchema.array(),PIIOrderByWithRelationInputSchema ]).optional(),
  cursor: PIIWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PIIAggregateArgsSchema;
