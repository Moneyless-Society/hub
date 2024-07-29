import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleArgsSchema } from "../outputTypeSchemas/CircleArgsSchema"
import { CircleAimEditsFindManyArgsSchema } from "../outputTypeSchemas/CircleAimEditsFindManyArgsSchema"
import { CircleAimCountOutputTypeArgsSchema } from "../outputTypeSchemas/CircleAimCountOutputTypeArgsSchema"

export const CircleAimIncludeSchema: z.ZodType<Prisma.CircleAimInclude> = z.object({
  circle: z.union([z.boolean(),z.lazy(() => CircleArgsSchema)]).optional(),
  edits: z.union([z.boolean(),z.lazy(() => CircleAimEditsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CircleAimCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default CircleAimIncludeSchema;
