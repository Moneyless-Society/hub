import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CirclesToRolesArgsSchema } from "../outputTypeSchemas/CirclesToRolesArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"

export const RoleTermIncludeSchema: z.ZodType<Prisma.RoleTermInclude> = z.object({
  circleRole: z.union([z.boolean(),z.lazy(() => CirclesToRolesArgsSchema)]).optional(),
  holder: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export default RoleTermIncludeSchema;
