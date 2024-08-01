import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleTermWhereInputSchema } from '../inputTypeSchemas/RoleTermWhereInputSchema'
import { RoleTermOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RoleTermOrderByWithAggregationInputSchema'
import { RoleTermScalarFieldEnumSchema } from '../inputTypeSchemas/RoleTermScalarFieldEnumSchema'
import { RoleTermScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RoleTermScalarWhereWithAggregatesInputSchema'

export const RoleTermGroupByArgsSchema: z.ZodType<Prisma.RoleTermGroupByArgs> = z.object({
  where: RoleTermWhereInputSchema.optional(),
  orderBy: z.union([ RoleTermOrderByWithAggregationInputSchema.array(),RoleTermOrderByWithAggregationInputSchema ]).optional(),
  by: RoleTermScalarFieldEnumSchema.array(),
  having: RoleTermScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RoleTermGroupByArgsSchema;
