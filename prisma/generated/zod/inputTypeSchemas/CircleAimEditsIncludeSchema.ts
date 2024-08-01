import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimArgsSchema } from "../outputTypeSchemas/CircleAimArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"

export const CircleAimEditsIncludeSchema: z.ZodType<Prisma.CircleAimEditsInclude> = z.object({
  circleAim: z.union([z.boolean(),z.lazy(() => CircleAimArgsSchema)]).optional(),
  editor: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export default CircleAimEditsIncludeSchema;
