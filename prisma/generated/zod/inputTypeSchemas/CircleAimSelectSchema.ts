import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleArgsSchema } from "../outputTypeSchemas/CircleArgsSchema"
import { CircleAimEditsFindManyArgsSchema } from "../outputTypeSchemas/CircleAimEditsFindManyArgsSchema"
import { CircleAimCountOutputTypeArgsSchema } from "../outputTypeSchemas/CircleAimCountOutputTypeArgsSchema"

export const CircleAimSelectSchema: z.ZodType<Prisma.CircleAimSelect> = z.object({
  id: z.boolean().optional(),
  circleId: z.boolean().optional(),
  text: z.boolean().optional(),
  isActive: z.boolean().optional(),
  circle: z.union([z.boolean(),z.lazy(() => CircleArgsSchema)]).optional(),
  edits: z.union([z.boolean(),z.lazy(() => CircleAimEditsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CircleAimCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default CircleAimSelectSchema;
