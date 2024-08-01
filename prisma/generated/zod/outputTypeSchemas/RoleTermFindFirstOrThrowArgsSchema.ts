import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleTermIncludeSchema } from '../inputTypeSchemas/RoleTermIncludeSchema'
import { RoleTermWhereInputSchema } from '../inputTypeSchemas/RoleTermWhereInputSchema'
import { RoleTermOrderByWithRelationInputSchema } from '../inputTypeSchemas/RoleTermOrderByWithRelationInputSchema'
import { RoleTermWhereUniqueInputSchema } from '../inputTypeSchemas/RoleTermWhereUniqueInputSchema'
import { RoleTermScalarFieldEnumSchema } from '../inputTypeSchemas/RoleTermScalarFieldEnumSchema'
import { CirclesToRolesArgsSchema } from "../outputTypeSchemas/CirclesToRolesArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RoleTermSelectSchema: z.ZodType<Prisma.RoleTermSelect> = z.object({
  id: z.boolean().optional(),
  circleId: z.boolean().optional(),
  roleId: z.boolean().optional(),
  holderId: z.boolean().optional(),
  start: z.boolean().optional(),
  end: z.boolean().optional(),
  circleRole: z.union([z.boolean(),z.lazy(() => CirclesToRolesArgsSchema)]).optional(),
  holder: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const RoleTermFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RoleTermFindFirstOrThrowArgs> = z.object({
  select: RoleTermSelectSchema.optional(),
  include: RoleTermIncludeSchema.optional(),
  where: RoleTermWhereInputSchema.optional(),
  orderBy: z.union([ RoleTermOrderByWithRelationInputSchema.array(),RoleTermOrderByWithRelationInputSchema ]).optional(),
  cursor: RoleTermWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RoleTermScalarFieldEnumSchema,RoleTermScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default RoleTermFindFirstOrThrowArgsSchema;
