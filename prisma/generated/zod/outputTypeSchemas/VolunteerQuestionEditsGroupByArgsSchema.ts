import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionEditsWhereInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsWhereInputSchema'
import { VolunteerQuestionEditsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsOrderByWithAggregationInputSchema'
import { VolunteerQuestionEditsScalarFieldEnumSchema } from '../inputTypeSchemas/VolunteerQuestionEditsScalarFieldEnumSchema'
import { VolunteerQuestionEditsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsScalarWhereWithAggregatesInputSchema'

export const VolunteerQuestionEditsGroupByArgsSchema: z.ZodType<Prisma.VolunteerQuestionEditsGroupByArgs> = z.object({
  where: VolunteerQuestionEditsWhereInputSchema.optional(),
  orderBy: z.union([ VolunteerQuestionEditsOrderByWithAggregationInputSchema.array(),VolunteerQuestionEditsOrderByWithAggregationInputSchema ]).optional(),
  by: VolunteerQuestionEditsScalarFieldEnumSchema.array(),
  having: VolunteerQuestionEditsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default VolunteerQuestionEditsGroupByArgsSchema;
