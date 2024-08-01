import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CirclesToRolesIncludeSchema } from '../inputTypeSchemas/CirclesToRolesIncludeSchema'
import { CirclesToRolesUpdateInputSchema } from '../inputTypeSchemas/CirclesToRolesUpdateInputSchema'
import { CirclesToRolesUncheckedUpdateInputSchema } from '../inputTypeSchemas/CirclesToRolesUncheckedUpdateInputSchema'
import { CirclesToRolesWhereUniqueInputSchema } from '../inputTypeSchemas/CirclesToRolesWhereUniqueInputSchema'
import { CircleArgsSchema } from "../outputTypeSchemas/CircleArgsSchema"
import { RoleArgsSchema } from "../outputTypeSchemas/RoleArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { RoleTermFindManyArgsSchema } from "../outputTypeSchemas/RoleTermFindManyArgsSchema"
import { CirclesToRolesCountOutputTypeArgsSchema } from "../outputTypeSchemas/CirclesToRolesCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CirclesToRolesSelectSchema: z.ZodType<Prisma.CirclesToRolesSelect> = z.object({
  circleId: z.boolean().optional(),
  roleId: z.boolean().optional(),
  incumbentId: z.boolean().optional(),
  termIds: z.boolean().optional(),
  circle: z.union([z.boolean(),z.lazy(() => CircleArgsSchema)]).optional(),
  role: z.union([z.boolean(),z.lazy(() => RoleArgsSchema)]).optional(),
  incumbent: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  terms: z.union([z.boolean(),z.lazy(() => RoleTermFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CirclesToRolesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CirclesToRolesUpdateArgsSchema: z.ZodType<Prisma.CirclesToRolesUpdateArgs> = z.object({
  select: CirclesToRolesSelectSchema.optional(),
  include: CirclesToRolesIncludeSchema.optional(),
  data: z.union([ CirclesToRolesUpdateInputSchema,CirclesToRolesUncheckedUpdateInputSchema ]),
  where: CirclesToRolesWhereUniqueInputSchema,
}).strict() ;

export default CirclesToRolesUpdateArgsSchema;
