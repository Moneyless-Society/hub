import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicWhereInputSchema } from '../inputTypeSchemas/EthicWhereInputSchema'
import { EthicOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EthicOrderByWithAggregationInputSchema'
import { EthicScalarFieldEnumSchema } from '../inputTypeSchemas/EthicScalarFieldEnumSchema'
import { EthicScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EthicScalarWhereWithAggregatesInputSchema'

export const EthicGroupByArgsSchema: z.ZodType<Prisma.EthicGroupByArgs> = z.object({
  where: EthicWhereInputSchema.optional(),
  orderBy: z.union([ EthicOrderByWithAggregationInputSchema.array(),EthicOrderByWithAggregationInputSchema ]).optional(),
  by: EthicScalarFieldEnumSchema.array(),
  having: EthicScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default EthicGroupByArgsSchema;
