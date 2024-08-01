import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleWhereInputSchema } from '../inputTypeSchemas/RoleWhereInputSchema'
import { RoleOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RoleOrderByWithAggregationInputSchema'
import { RoleScalarFieldEnumSchema } from '../inputTypeSchemas/RoleScalarFieldEnumSchema'
import { RoleScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RoleScalarWhereWithAggregatesInputSchema'

export const RoleGroupByArgsSchema: z.ZodType<Prisma.RoleGroupByArgs> = z.object({
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithAggregationInputSchema.array(),RoleOrderByWithAggregationInputSchema ]).optional(),
  by: RoleScalarFieldEnumSchema.array(),
  having: RoleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RoleGroupByArgsSchema;
