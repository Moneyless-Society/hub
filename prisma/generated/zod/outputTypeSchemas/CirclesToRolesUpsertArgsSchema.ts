import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CirclesToRolesIncludeSchema } from '../inputTypeSchemas/CirclesToRolesIncludeSchema'
import { CirclesToRolesWhereUniqueInputSchema } from '../inputTypeSchemas/CirclesToRolesWhereUniqueInputSchema'
import { CirclesToRolesCreateInputSchema } from '../inputTypeSchemas/CirclesToRolesCreateInputSchema'
import { CirclesToRolesUncheckedCreateInputSchema } from '../inputTypeSchemas/CirclesToRolesUncheckedCreateInputSchema'
import { CirclesToRolesUpdateInputSchema } from '../inputTypeSchemas/CirclesToRolesUpdateInputSchema'
import { CirclesToRolesUncheckedUpdateInputSchema } from '../inputTypeSchemas/CirclesToRolesUncheckedUpdateInputSchema'
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

export const CirclesToRolesUpsertArgsSchema: z.ZodType<Prisma.CirclesToRolesUpsertArgs> = z.object({
  select: CirclesToRolesSelectSchema.optional(),
  include: CirclesToRolesIncludeSchema.optional(),
  where: CirclesToRolesWhereUniqueInputSchema,
  create: z.union([ CirclesToRolesCreateInputSchema,CirclesToRolesUncheckedCreateInputSchema ]),
  update: z.union([ CirclesToRolesUpdateInputSchema,CirclesToRolesUncheckedUpdateInputSchema ]),
}).strict() ;

export default CirclesToRolesUpsertArgsSchema;
