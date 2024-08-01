import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimEditsWhereInputSchema } from '../inputTypeSchemas/CircleAimEditsWhereInputSchema'
import { CircleAimEditsOrderByWithRelationInputSchema } from '../inputTypeSchemas/CircleAimEditsOrderByWithRelationInputSchema'
import { CircleAimEditsWhereUniqueInputSchema } from '../inputTypeSchemas/CircleAimEditsWhereUniqueInputSchema'

export const CircleAimEditsAggregateArgsSchema: z.ZodType<Prisma.CircleAimEditsAggregateArgs> = z.object({
  where: CircleAimEditsWhereInputSchema.optional(),
  orderBy: z.union([ CircleAimEditsOrderByWithRelationInputSchema.array(),CircleAimEditsOrderByWithRelationInputSchema ]).optional(),
  cursor: CircleAimEditsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CircleAimEditsAggregateArgsSchema;
