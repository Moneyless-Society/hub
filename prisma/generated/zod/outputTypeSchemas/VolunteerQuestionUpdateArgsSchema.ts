import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionIncludeSchema } from '../inputTypeSchemas/VolunteerQuestionIncludeSchema'
import { VolunteerQuestionUpdateInputSchema } from '../inputTypeSchemas/VolunteerQuestionUpdateInputSchema'
import { VolunteerQuestionUncheckedUpdateInputSchema } from '../inputTypeSchemas/VolunteerQuestionUncheckedUpdateInputSchema'
import { VolunteerQuestionWhereUniqueInputSchema } from '../inputTypeSchemas/VolunteerQuestionWhereUniqueInputSchema'
import { VolunteerResponseFindManyArgsSchema } from "../outputTypeSchemas/VolunteerResponseFindManyArgsSchema"
import { VolunteerQuestionEditsFindManyArgsSchema } from "../outputTypeSchemas/VolunteerQuestionEditsFindManyArgsSchema"
import { VolunteerQuestionCountOutputTypeArgsSchema } from "../outputTypeSchemas/VolunteerQuestionCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const VolunteerQuestionSelectSchema: z.ZodType<Prisma.VolunteerQuestionSelect> = z.object({
  id: z.boolean().optional(),
  text: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  responses: z.union([z.boolean(),z.lazy(() => VolunteerResponseFindManyArgsSchema)]).optional(),
  edits: z.union([z.boolean(),z.lazy(() => VolunteerQuestionEditsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => VolunteerQuestionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const VolunteerQuestionUpdateArgsSchema: z.ZodType<Prisma.VolunteerQuestionUpdateArgs> = z.object({
  select: VolunteerQuestionSelectSchema.optional(),
  include: VolunteerQuestionIncludeSchema.optional(),
  data: z.union([ VolunteerQuestionUpdateInputSchema,VolunteerQuestionUncheckedUpdateInputSchema ]),
  where: VolunteerQuestionWhereUniqueInputSchema,
}).strict() ;

export default VolunteerQuestionUpdateArgsSchema;
