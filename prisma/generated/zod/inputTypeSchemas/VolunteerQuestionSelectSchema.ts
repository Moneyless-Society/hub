import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerResponseFindManyArgsSchema } from "../outputTypeSchemas/VolunteerResponseFindManyArgsSchema"
import { VolunteerQuestionEditsFindManyArgsSchema } from "../outputTypeSchemas/VolunteerQuestionEditsFindManyArgsSchema"
import { VolunteerQuestionCountOutputTypeArgsSchema } from "../outputTypeSchemas/VolunteerQuestionCountOutputTypeArgsSchema"

export const VolunteerQuestionSelectSchema: z.ZodType<Prisma.VolunteerQuestionSelect> = z.object({
  id: z.boolean().optional(),
  text: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  responses: z.union([z.boolean(),z.lazy(() => VolunteerResponseFindManyArgsSchema)]).optional(),
  edits: z.union([z.boolean(),z.lazy(() => VolunteerQuestionEditsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => VolunteerQuestionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default VolunteerQuestionSelectSchema;
