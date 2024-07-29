import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CircleAimArgsSchema } from "../outputTypeSchemas/CircleAimArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"

export const CircleAimEditsSelectSchema: z.ZodType<Prisma.CircleAimEditsSelect> = z.object({
  id: z.boolean().optional(),
  circleAimId: z.boolean().optional(),
  editorId: z.boolean().optional(),
  circleAim: z.union([z.boolean(),z.lazy(() => CircleAimArgsSchema)]).optional(),
  editor: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export default CircleAimEditsSelectSchema;
