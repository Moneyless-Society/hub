import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleTermIncludeSchema } from '../inputTypeSchemas/RoleTermIncludeSchema'
import { RoleTermUpdateInputSchema } from '../inputTypeSchemas/RoleTermUpdateInputSchema'
import { RoleTermUncheckedUpdateInputSchema } from '../inputTypeSchemas/RoleTermUncheckedUpdateInputSchema'
import { RoleTermWhereUniqueInputSchema } from '../inputTypeSchemas/RoleTermWhereUniqueInputSchema'
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

export const RoleTermUpdateArgsSchema: z.ZodType<Prisma.RoleTermUpdateArgs> = z.object({
  select: RoleTermSelectSchema.optional(),
  include: RoleTermIncludeSchema.optional(),
  data: z.union([ RoleTermUpdateInputSchema,RoleTermUncheckedUpdateInputSchema ]),
  where: RoleTermWhereUniqueInputSchema,
}).strict() ;

export default RoleTermUpdateArgsSchema;
