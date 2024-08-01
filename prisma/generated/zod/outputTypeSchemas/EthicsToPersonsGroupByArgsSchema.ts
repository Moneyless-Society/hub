import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicsToPersonsWhereInputSchema } from '../inputTypeSchemas/EthicsToPersonsWhereInputSchema'
import { EthicsToPersonsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/EthicsToPersonsOrderByWithAggregationInputSchema'
import { EthicsToPersonsScalarFieldEnumSchema } from '../inputTypeSchemas/EthicsToPersonsScalarFieldEnumSchema'
import { EthicsToPersonsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/EthicsToPersonsScalarWhereWithAggregatesInputSchema'

export const EthicsToPersonsGroupByArgsSchema: z.ZodType<Prisma.EthicsToPersonsGroupByArgs> = z.object({
  where: EthicsToPersonsWhereInputSchema.optional(),
  orderBy: z.union([ EthicsToPersonsOrderByWithAggregationInputSchema.array(),EthicsToPersonsOrderByWithAggregationInputSchema ]).optional(),
  by: EthicsToPersonsScalarFieldEnumSchema.array(),
  having: EthicsToPersonsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default EthicsToPersonsGroupByArgsSchema;
