import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicsToPersonsWhereInputSchema } from '../inputTypeSchemas/EthicsToPersonsWhereInputSchema'
import { EthicsToPersonsOrderByWithRelationInputSchema } from '../inputTypeSchemas/EthicsToPersonsOrderByWithRelationInputSchema'
import { EthicsToPersonsWhereUniqueInputSchema } from '../inputTypeSchemas/EthicsToPersonsWhereUniqueInputSchema'

export const EthicsToPersonsAggregateArgsSchema: z.ZodType<Prisma.EthicsToPersonsAggregateArgs> = z.object({
  where: EthicsToPersonsWhereInputSchema.optional(),
  orderBy: z.union([ EthicsToPersonsOrderByWithRelationInputSchema.array(),EthicsToPersonsOrderByWithRelationInputSchema ]).optional(),
  cursor: EthicsToPersonsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default EthicsToPersonsAggregateArgsSchema;
