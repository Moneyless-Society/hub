import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionWhereInputSchema } from '../inputTypeSchemas/EthicVersionWhereInputSchema'
import { EthicVersionOrderByWithRelationInputSchema } from '../inputTypeSchemas/EthicVersionOrderByWithRelationInputSchema'
import { EthicVersionWhereUniqueInputSchema } from '../inputTypeSchemas/EthicVersionWhereUniqueInputSchema'

export const EthicVersionAggregateArgsSchema: z.ZodType<Prisma.EthicVersionAggregateArgs> = z.object({
  where: EthicVersionWhereInputSchema.optional(),
  orderBy: z.union([ EthicVersionOrderByWithRelationInputSchema.array(),EthicVersionOrderByWithRelationInputSchema ]).optional(),
  cursor: EthicVersionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default EthicVersionAggregateArgsSchema;
