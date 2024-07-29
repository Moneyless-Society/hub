import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionWhereInputSchema } from '../inputTypeSchemas/VolunteerQuestionWhereInputSchema'
import { VolunteerQuestionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/VolunteerQuestionOrderByWithAggregationInputSchema'
import { VolunteerQuestionScalarFieldEnumSchema } from '../inputTypeSchemas/VolunteerQuestionScalarFieldEnumSchema'
import { VolunteerQuestionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/VolunteerQuestionScalarWhereWithAggregatesInputSchema'

export const VolunteerQuestionGroupByArgsSchema: z.ZodType<Prisma.VolunteerQuestionGroupByArgs> = z.object({
  where: VolunteerQuestionWhereInputSchema.optional(),
  orderBy: z.union([ VolunteerQuestionOrderByWithAggregationInputSchema.array(),VolunteerQuestionOrderByWithAggregationInputSchema ]).optional(),
  by: VolunteerQuestionScalarFieldEnumSchema.array(),
  having: VolunteerQuestionScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default VolunteerQuestionGroupByArgsSchema;
