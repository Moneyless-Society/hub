import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleEditsWhereInputSchema } from '../inputTypeSchemas/RoleEditsWhereInputSchema'
import { RoleEditsOrderByWithRelationInputSchema } from '../inputTypeSchemas/RoleEditsOrderByWithRelationInputSchema'
import { RoleEditsWhereUniqueInputSchema } from '../inputTypeSchemas/RoleEditsWhereUniqueInputSchema'

export const RoleEditsAggregateArgsSchema: z.ZodType<Prisma.RoleEditsAggregateArgs> = z.object({
  where: RoleEditsWhereInputSchema.optional(),
  orderBy: z.union([ RoleEditsOrderByWithRelationInputSchema.array(),RoleEditsOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleEditsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default RoleEditsAggregateArgsSchema;
