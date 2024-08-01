import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionArgsSchema } from "../outputTypeSchemas/VolunteerQuestionArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"

export const VolunteerResponseIncludeSchema: z.ZodType<Prisma.VolunteerResponseInclude> = z.object({
  question: z.union([z.boolean(),z.lazy(() => VolunteerQuestionArgsSchema)]).optional(),
  responder: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  importedBy: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export default VolunteerResponseIncludeSchema;
