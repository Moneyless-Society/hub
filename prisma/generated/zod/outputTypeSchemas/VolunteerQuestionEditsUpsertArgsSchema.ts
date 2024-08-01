import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionEditsIncludeSchema } from '../inputTypeSchemas/VolunteerQuestionEditsIncludeSchema'
import { VolunteerQuestionEditsWhereUniqueInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsWhereUniqueInputSchema'
import { VolunteerQuestionEditsCreateInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsCreateInputSchema'
import { VolunteerQuestionEditsUncheckedCreateInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsUncheckedCreateInputSchema'
import { VolunteerQuestionEditsUpdateInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsUpdateInputSchema'
import { VolunteerQuestionEditsUncheckedUpdateInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsUncheckedUpdateInputSchema'
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

export const VolunteerQuestionEditsUpsertArgsSchema: z.ZodType<Prisma.VolunteerQuestionEditsUpsertArgs> = z.object({
  select: VolunteerQuestionEditsSelectSchema.optional(),
  include: VolunteerQuestionEditsIncludeSchema.optional(),
  where: VolunteerQuestionEditsWhereUniqueInputSchema,
  create: z.union([ VolunteerQuestionEditsCreateInputSchema,VolunteerQuestionEditsUncheckedCreateInputSchema ]),
  update: z.union([ VolunteerQuestionEditsUpdateInputSchema,VolunteerQuestionEditsUncheckedUpdateInputSchema ]),
}).strict() ;

export default VolunteerQuestionEditsUpsertArgsSchema;
