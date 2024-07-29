import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicWhereInputSchema } from '../inputTypeSchemas/EthicWhereInputSchema'
import { EthicOrderByWithRelationInputSchema } from '../inputTypeSchemas/EthicOrderByWithRelationInputSchema'
import { EthicWhereUniqueInputSchema } from '../inputTypeSchemas/EthicWhereUniqueInputSchema'

export const EthicAggregateArgsSchema: z.ZodType<Prisma.EthicAggregateArgs> = z.object({
  where: EthicWhereInputSchema.optional(),
  orderBy: z.union([ EthicOrderByWithRelationInputSchema.array(),EthicOrderByWithRelationInputSchema ]).optional(),
  cursor: EthicWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default EthicAggregateArgsSchema;
