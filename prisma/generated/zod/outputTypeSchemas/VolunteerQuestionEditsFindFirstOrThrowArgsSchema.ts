import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionEditsIncludeSchema } from '../inputTypeSchemas/VolunteerQuestionEditsIncludeSchema'
import { VolunteerQuestionEditsWhereInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsWhereInputSchema'
import { VolunteerQuestionEditsOrderByWithRelationInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsOrderByWithRelationInputSchema'
import { VolunteerQuestionEditsWhereUniqueInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsWhereUniqueInputSchema'
import { VolunteerQuestionEditsScalarFieldEnumSchema } from '../inputTypeSchemas/VolunteerQuestionEditsScalarFieldEnumSchema'
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

export const VolunteerQuestionEditsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.VolunteerQuestionEditsFindFirstOrThrowArgs> = z.object({
  select: VolunteerQuestionEditsSelectSchema.optional(),
  include: VolunteerQuestionEditsIncludeSchema.optional(),
  where: VolunteerQuestionEditsWhereInputSchema.optional(),
  orderBy: z.union([ VolunteerQuestionEditsOrderByWithRelationInputSchema.array(),VolunteerQuestionEditsOrderByWithRelationInputSchema ]).optional(),
  cursor: VolunteerQuestionEditsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VolunteerQuestionEditsScalarFieldEnumSchema,VolunteerQuestionEditsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default VolunteerQuestionEditsFindFirstOrThrowArgsSchema;
