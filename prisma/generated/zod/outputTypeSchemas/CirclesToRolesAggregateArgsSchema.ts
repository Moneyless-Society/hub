import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CirclesToRolesWhereInputSchema } from '../inputTypeSchemas/CirclesToRolesWhereInputSchema'
import { CirclesToRolesOrderByWithRelationInputSchema } from '../inputTypeSchemas/CirclesToRolesOrderByWithRelationInputSchema'
import { CirclesToRolesWhereUniqueInputSchema } from '../inputTypeSchemas/CirclesToRolesWhereUniqueInputSchema'

export const CirclesToRolesAggregateArgsSchema: z.ZodType<Prisma.CirclesToRolesAggregateArgs> = z.object({
  where: CirclesToRolesWhereInputSchema.optional(),
  orderBy: z.union([ CirclesToRolesOrderByWithRelationInputSchema.array(),CirclesToRolesOrderByWithRelationInputSchema ]).optional(),
  cursor: CirclesToRolesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default CirclesToRolesAggregateArgsSchema;
