import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionsToPersonsWhereInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsWhereInputSchema'
import { EthicVersionsToPersonsOrderByWithRelationInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsOrderByWithRelationInputSchema'
import { EthicVersionsToPersonsWhereUniqueInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsWhereUniqueInputSchema'

export const EthicVersionsToPersonsAggregateArgsSchema: z.ZodType<Prisma.EthicVersionsToPersonsAggregateArgs> = z.object({
  where: EthicVersionsToPersonsWhereInputSchema.optional(),
  orderBy: z.union([ EthicVersionsToPersonsOrderByWithRelationInputSchema.array(),EthicVersionsToPersonsOrderByWithRelationInputSchema ]).optional(),
  cursor: EthicVersionsToPersonsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default EthicVersionsToPersonsAggregateArgsSchema;
