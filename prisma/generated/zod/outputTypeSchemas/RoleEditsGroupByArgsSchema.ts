import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleEditsWhereInputSchema } from '../inputTypeSchemas/RoleEditsWhereInputSchema'
import { RoleEditsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/RoleEditsOrderByWithAggregationInputSchema'
import { RoleEditsScalarFieldEnumSchema } from '../inputTypeSchemas/RoleEditsScalarFieldEnumSchema'
import { RoleEditsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/RoleEditsScalarWhereWithAggregatesInputSchema'

export const RoleEditsGroupByArgsSchema: z.ZodType<Prisma.RoleEditsGroupByArgs> = z.object({
  where: RoleEditsWhereInputSchema.optional(),
  orderBy: z.union([ RoleEditsOrderByWithAggregationInputSchema.array(),RoleEditsOrderByWithAggregationInputSchema ]).optional(),
  by: RoleEditsScalarFieldEnumSchema.array(),
  having: RoleEditsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RoleEditsGroupByArgsSchema;
