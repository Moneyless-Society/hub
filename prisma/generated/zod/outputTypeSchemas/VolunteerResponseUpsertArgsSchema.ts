import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerResponseIncludeSchema } from '../inputTypeSchemas/VolunteerResponseIncludeSchema'
import { VolunteerResponseWhereUniqueInputSchema } from '../inputTypeSchemas/VolunteerResponseWhereUniqueInputSchema'
import { VolunteerResponseCreateInputSchema } from '../inputTypeSchemas/VolunteerResponseCreateInputSchema'
import { VolunteerResponseUncheckedCreateInputSchema } from '../inputTypeSchemas/VolunteerResponseUncheckedCreateInputSchema'
import { VolunteerResponseUpdateInputSchema } from '../inputTypeSchemas/VolunteerResponseUpdateInputSchema'
import { VolunteerResponseUncheckedUpdateInputSchema } from '../inputTypeSchemas/VolunteerResponseUncheckedUpdateInputSchema'
import { VolunteerQuestionArgsSchema } from "../outputTypeSchemas/VolunteerQuestionArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VolunteerResponseSelectSchema: z.ZodType<Prisma.VolunteerResponseSelect> = z.object({
  questionId: z.boolean().optional(),
  responderId: z.boolean().optional(),
  answer: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  importerId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  submittedAt: z.boolean().optional(),
  question: z.union([z.boolean(),z.lazy(() => VolunteerQuestionArgsSchema)]).optional(),
  responder: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
  importedBy: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const VolunteerResponseUpsertArgsSchema: z.ZodType<Prisma.VolunteerResponseUpsertArgs> = z.object({
  select: VolunteerResponseSelectSchema.optional(),
  include: VolunteerResponseIncludeSchema.optional(),
  where: VolunteerResponseWhereUniqueInputSchema,
  create: z.union([ VolunteerResponseCreateInputSchema,VolunteerResponseUncheckedCreateInputSchema ]),
  update: z.union([ VolunteerResponseUpdateInputSchema,VolunteerResponseUncheckedUpdateInputSchema ]),
}).strict() ;

export default VolunteerResponseUpsertArgsSchema;
