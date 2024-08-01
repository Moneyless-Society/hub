import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionsToPersonsWhereInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsWhereInputSchema'
import { EthicVersionsToPersonsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsOrderByWithAggregationInputSchema'
import { EthicVersionsToPersonsScalarFieldEnumSchema } from '../inputTypeSchemas/EthicVersionsToPersonsScalarFieldEnumSchema'
import { EthicVersionsToPersonsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsScalarWhereWithAggregatesInputSchema'

export const EthicVersionsToPersonsGroupByArgsSchema: z.ZodType<Prisma.EthicVersionsToPersonsGroupByArgs> = z.object({
  where: EthicVersionsToPersonsWhereInputSchema.optional(),
  orderBy: z.union([ EthicVersionsToPersonsOrderByWithAggregationInputSchema.array(),EthicVersionsToPersonsOrderByWithAggregationInputSchema ]).optional(),
  by: EthicVersionsToPersonsScalarFieldEnumSchema.array(),
  having: EthicVersionsToPersonsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default EthicVersionsToPersonsGroupByArgsSchema;
