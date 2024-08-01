import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionEditsIncludeSchema } from '../inputTypeSchemas/VolunteerQuestionEditsIncludeSchema'
import { VolunteerQuestionEditsCreateInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsCreateInputSchema'
import { VolunteerQuestionEditsUncheckedCreateInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsUncheckedCreateInputSchema'
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

export const VolunteerQuestionEditsCreateArgsSchema: z.ZodType<Prisma.VolunteerQuestionEditsCreateArgs> = z.object({
  select: VolunteerQuestionEditsSelectSchema.optional(),
  include: VolunteerQuestionEditsIncludeSchema.optional(),
  data: z.union([ VolunteerQuestionEditsCreateInputSchema,VolunteerQuestionEditsUncheckedCreateInputSchema ]),
}).strict() ;

export default VolunteerQuestionEditsCreateArgsSchema;
