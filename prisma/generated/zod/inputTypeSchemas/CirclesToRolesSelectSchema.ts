import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleArgsSchema } from "../outputTypeSchemas/CircleArgsSchema"
import { RoleArgsSchema } from "../outputTypeSchemas/RoleArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
import { RoleTermFindManyArgsSchema } from "../outputTypeSchemas/RoleTermFindManyArgsSchema"
import { CirclesToRolesCountOutputTypeArgsSchema } from "../outputTypeSchemas/CirclesToRolesCountOutputTypeArgsSchema"

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

export default CirclesToRolesSelectSchema;
