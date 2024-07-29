import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerResponseFindManyArgsSchema } from "../outputTypeSchemas/VolunteerResponseFindManyArgsSchema"
import { VolunteerQuestionEditsFindManyArgsSchema } from "../outputTypeSchemas/VolunteerQuestionEditsFindManyArgsSchema"
import { VolunteerQuestionCountOutputTypeArgsSchema } from "../outputTypeSchemas/VolunteerQuestionCountOutputTypeArgsSchema"

export const VolunteerQuestionIncludeSchema: z.ZodType<Prisma.VolunteerQuestionInclude> = z.object({
  responses: z.union([z.boolean(),z.lazy(() => VolunteerResponseFindManyArgsSchema)]).optional(),
  edits: z.union([z.boolean(),z.lazy(() => VolunteerQuestionEditsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => VolunteerQuestionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default VolunteerQuestionIncludeSchema;
