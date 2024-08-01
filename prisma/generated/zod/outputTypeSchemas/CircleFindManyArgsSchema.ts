import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleIncludeSchema } from '../inputTypeSchemas/CircleIncludeSchema'
import { CircleWhereInputSchema } from '../inputTypeSchemas/CircleWhereInputSchema'
import { CircleOrderByWithRelationInputSchema } from '../inputTypeSchemas/CircleOrderByWithRelationInputSchema'
import { CircleWhereUniqueInputSchema } from '../inputTypeSchemas/CircleWhereUniqueInputSchema'
import { CircleScalarFieldEnumSchema } from '../inputTypeSchemas/CircleScalarFieldEnumSchema'
import { CircleAimFindManyArgsSchema } from "../outputTypeSchemas/CircleAimFindManyArgsSchema"
import { CirclesToRolesFindManyArgsSchema } from "../outputTypeSchemas/CirclesToRolesFindManyArgsSchema"
import { CircleCountOutputTypeArgsSchema } from "../outputTypeSchemas/CircleCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CircleSelectSchema: z.ZodType<Prisma.CircleSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  mission: z.boolean().optional(),
  description: z.boolean().optional(),
  domains: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedBy: z.boolean().optional(),
  isActive: z.boolean().optional(),
  aims: z.union([z.boolean(),z.lazy(() => CircleAimFindManyArgsSchema)]).optional(),
  roles: z.union([z.boolean(),z.lazy(() => CirclesToRolesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CircleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CircleFindManyArgsSchema: z.ZodType<Prisma.CircleFindManyArgs> = z.object({
  select: CircleSelectSchema.optional(),
  include: CircleIncludeSchema.optional(),
  where: CircleWhereInputSchema.optional(),
  orderBy: z.union([ CircleOrderByWithRelationInputSchema.array(),CircleOrderByWithRelationInputSchema ]).optional(),
  cursor: CircleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CircleScalarFieldEnumSchema,CircleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CircleFindManyArgsSchema;
