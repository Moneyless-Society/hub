import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CirclesToRolesArgsSchema } from "../outputTypeSchemas/CirclesToRolesArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"

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

export default RoleTermSelectSchema;
