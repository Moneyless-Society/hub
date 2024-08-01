import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleIncludeSchema } from '../inputTypeSchemas/RoleIncludeSchema'
import { RoleWhereInputSchema } from '../inputTypeSchemas/RoleWhereInputSchema'
import { RoleOrderByWithRelationInputSchema } from '../inputTypeSchemas/RoleOrderByWithRelationInputSchema'
import { RoleWhereUniqueInputSchema } from '../inputTypeSchemas/RoleWhereUniqueInputSchema'
import { RoleScalarFieldEnumSchema } from '../inputTypeSchemas/RoleScalarFieldEnumSchema'
import { RoleEditsFindManyArgsSchema } from "../outputTypeSchemas/RoleEditsFindManyArgsSchema"
import { CirclesToRolesFindManyArgsSchema } from "../outputTypeSchemas/CirclesToRolesFindManyArgsSchema"
import { RoleCountOutputTypeArgsSchema } from "../outputTypeSchemas/RoleCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoleSelectSchema: z.ZodType<Prisma.RoleSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  isActive: z.boolean().optional(),
  edits: z.union([z.boolean(),z.lazy(() => RoleEditsFindManyArgsSchema)]).optional(),
  circles: z.union([z.boolean(),z.lazy(() => CirclesToRolesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RoleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const RoleFindManyArgsSchema: z.ZodType<Prisma.RoleFindManyArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  where: RoleWhereInputSchema.optional(),
  orderBy: z.union([ RoleOrderByWithRelationInputSchema.array(),RoleOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoleScalarFieldEnumSchema,RoleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default RoleFindManyArgsSchema;
