import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleWhereInputSchema } from '../inputTypeSchemas/RoleWhereInputSchema'
import { RoleOrderByWithRelationInputSchema } from '../inputTypeSchemas/RoleOrderByWithRelationInputSchema'
import { RoleWhereUniqueInputSchema } from '../inputTypeSchemas/RoleWhereUniqueInputSchema'

export const RoleAggregateArgsSchema: z.ZodType<Prisma.RoleAggregateArgs> = z.object({
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RoleAggregateArgsSchema;
