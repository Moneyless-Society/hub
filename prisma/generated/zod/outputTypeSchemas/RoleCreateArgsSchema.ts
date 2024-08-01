import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleIncludeSchema } from '../inputTypeSchemas/RoleIncludeSchema'
import { RoleCreateInputSchema } from '../inputTypeSchemas/RoleCreateInputSchema'
import { RoleUncheckedCreateInputSchema } from '../inputTypeSchemas/RoleUncheckedCreateInputSchema'
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

export const RoleCreateArgsSchema: z.ZodType<Prisma.RoleCreateArgs> = z.object({
  select: RoleSelectSchema.optional(),
  include: RoleIncludeSchema.optional(),
  data: z.union([ RoleCreateInputSchema,RoleUncheckedCreateInputSchema ]),
}).strict() ;

export default RoleCreateArgsSchema;
