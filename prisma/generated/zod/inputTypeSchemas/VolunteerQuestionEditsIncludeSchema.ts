import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionArgsSchema } from "../outputTypeSchemas/VolunteerQuestionArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"

export const VolunteerQuestionEditsIncludeSchema: z.ZodType<Prisma.VolunteerQuestionEditsInclude> = z.object({
  question: z.union([z.boolean(),z.lazy(() => VolunteerQuestionArgsSchema)]).optional(),
  editor: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export default VolunteerQuestionEditsIncludeSchema;
