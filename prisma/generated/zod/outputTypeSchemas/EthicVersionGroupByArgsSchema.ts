import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionWhereInputSchema } from '../inputTypeSchemas/EthicVersionWhereInputSchema'
import { EthicVersionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EthicVersionOrderByWithAggregationInputSchema'
import { EthicVersionScalarFieldEnumSchema } from '../inputTypeSchemas/EthicVersionScalarFieldEnumSchema'
import { EthicVersionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EthicVersionScalarWhereWithAggregatesInputSchema'

export const EthicVersionGroupByArgsSchema: z.ZodType<Prisma.EthicVersionGroupByArgs> = z.object({
  where: EthicVersionWhereInputSchema.optional(),
  orderBy: z.union([ EthicVersionOrderByWithAggregationInputSchema.array(),EthicVersionOrderByWithAggregationInputSchema ]).optional(),
  by: EthicVersionScalarFieldEnumSchema.array(),
  having: EthicVersionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default EthicVersionGroupByArgsSchema;
