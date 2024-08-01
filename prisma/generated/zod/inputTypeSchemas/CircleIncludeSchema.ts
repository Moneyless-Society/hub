import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimFindManyArgsSchema } from "../outputTypeSchemas/CircleAimFindManyArgsSchema"
import { CirclesToRolesFindManyArgsSchema } from "../outputTypeSchemas/CirclesToRolesFindManyArgsSchema"
import { CircleCountOutputTypeArgsSchema } from "../outputTypeSchemas/CircleCountOutputTypeArgsSchema"

export const CircleIncludeSchema: z.ZodType<Prisma.CircleInclude> = z.object({
  aims: z.union([z.boolean(),z.lazy(() => CircleAimFindManyArgsSchema)]).optional(),
  roles: z.union([z.boolean(),z.lazy(() => CirclesToRolesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CircleCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default CircleIncludeSchema;
