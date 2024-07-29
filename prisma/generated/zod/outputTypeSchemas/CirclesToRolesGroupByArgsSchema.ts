import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CirclesToRolesWhereInputSchema } from '../inputTypeSchemas/CirclesToRolesWhereInputSchema'
import { CirclesToRolesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CirclesToRolesOrderByWithAggregationInputSchema'
import { CirclesToRolesScalarFieldEnumSchema } from '../inputTypeSchemas/CirclesToRolesScalarFieldEnumSchema'
import { CirclesToRolesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CirclesToRolesScalarWhereWithAggregatesInputSchema'

export const CirclesToRolesGroupByArgsSchema: z.ZodType<Prisma.CirclesToRolesGroupByArgs> = z.object({
  where: CirclesToRolesWhereInputSchema.optional(),
  orderBy: z.union([ CirclesToRolesOrderByWithAggregationInputSchema.array(),CirclesToRolesOrderByWithAggregationInputSchema ]).optional(),
  by: CirclesToRolesScalarFieldEnumSchema.array(),
  having: CirclesToRolesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CirclesToRolesGroupByArgsSchema;
