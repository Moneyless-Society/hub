import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionEditsIncludeSchema } from '../inputTypeSchemas/VolunteerQuestionEditsIncludeSchema'
import { VolunteerQuestionEditsWhereUniqueInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsWhereUniqueInputSchema'
import { VolunteerQuestionArgsSchema } from "../outputTypeSchemas/VolunteerQuestionArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VolunteerQuestionEditsSelectSchema: z.ZodType<Prisma.VolunteerQuestionEditsSelect> = z.object({
  questionId: z.boolean().optional(),
  editorId: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  question: z.union([z.boolean(),z.lazy(() => VolunteerQuestionArgsSchema)]).optional(),
  editor: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const VolunteerQuestionEditsDeleteArgsSchema: z.ZodType<Prisma.VolunteerQuestionEditsDeleteArgs> = z.object({
  select: VolunteerQuestionEditsSelectSchema.optional(),
  include: VolunteerQuestionEditsIncludeSchema.optional(),
  where: VolunteerQuestionEditsWhereUniqueInputSchema,
}).strict() ;

export default VolunteerQuestionEditsDeleteArgsSchema;
