import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerResponseIncludeSchema } from '../inputTypeSchemas/VolunteerResponseIncludeSchema'
import { VolunteerResponseWhereInputSchema } from '../inputTypeSchemas/VolunteerResponseWhereInputSchema'
import { VolunteerResponseOrderByWithRelationInputSchema } from '../inputTypeSchemas/VolunteerResponseOrderByWithRelationInputSchema'
import { VolunteerResponseWhereUniqueInputSchema } from '../inputTypeSchemas/VolunteerResponseWhereUniqueInputSchema'
import { VolunteerResponseScalarFieldEnumSchema } from '../inputTypeSchemas/VolunteerResponseScalarFieldEnumSchema'
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

export const VolunteerResponseFindFirstArgsSchema: z.ZodType<Prisma.VolunteerResponseFindFirstArgs> = z.object({
  select: VolunteerResponseSelectSchema.optional(),
  include: VolunteerResponseIncludeSchema.optional(),
  where: VolunteerResponseWhereInputSchema.optional(),
  orderBy: z.union([ VolunteerResponseOrderByWithRelationInputSchema.array(),VolunteerResponseOrderByWithRelationInputSchema ]).optional(),
  cursor: VolunteerResponseWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ VolunteerResponseScalarFieldEnumSchema,VolunteerResponseScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default VolunteerResponseFindFirstArgsSchema;
