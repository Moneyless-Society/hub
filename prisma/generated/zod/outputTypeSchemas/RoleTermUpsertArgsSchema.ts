import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleTermIncludeSchema } from '../inputTypeSchemas/RoleTermIncludeSchema'
import { RoleTermWhereUniqueInputSchema } from '../inputTypeSchemas/RoleTermWhereUniqueInputSchema'
import { RoleTermCreateInputSchema } from '../inputTypeSchemas/RoleTermCreateInputSchema'
import { RoleTermUncheckedCreateInputSchema } from '../inputTypeSchemas/RoleTermUncheckedCreateInputSchema'
import { RoleTermUpdateInputSchema } from '../inputTypeSchemas/RoleTermUpdateInputSchema'
import { RoleTermUncheckedUpdateInputSchema } from '../inputTypeSchemas/RoleTermUncheckedUpdateInputSchema'
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

export const RoleTermUpsertArgsSchema: z.ZodType<Prisma.RoleTermUpsertArgs> = z.object({
  select: RoleTermSelectSchema.optional(),
  include: RoleTermIncludeSchema.optional(),
  where: RoleTermWhereUniqueInputSchema,
  create: z.union([ RoleTermCreateInputSchema,RoleTermUncheckedCreateInputSchema ]),
  update: z.union([ RoleTermUpdateInputSchema,RoleTermUncheckedUpdateInputSchema ]),
}).strict() ;

export default RoleTermUpsertArgsSchema;
