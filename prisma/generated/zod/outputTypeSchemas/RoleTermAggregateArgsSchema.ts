import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleTermWhereInputSchema } from '../inputTypeSchemas/RoleTermWhereInputSchema'
import { RoleTermOrderByWithRelationInputSchema } from '../inputTypeSchemas/RoleTermOrderByWithRelationInputSchema'
import { RoleTermWhereUniqueInputSchema } from '../inputTypeSchemas/RoleTermWhereUniqueInputSchema'

export const RoleTermAggregateArgsSchema: z.ZodType<Prisma.RoleTermAggregateArgs> = z.object({
  where: RoleTermWhereInputSchema.optional(),
  orderBy: z.union([ RoleTermOrderByWithRelationInputSchema.array(),RoleTermOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleTermWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RoleTermAggregateArgsSchema;
