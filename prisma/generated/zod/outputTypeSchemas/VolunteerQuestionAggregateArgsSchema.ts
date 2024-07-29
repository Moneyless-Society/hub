import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionWhereInputSchema } from '../inputTypeSchemas/VolunteerQuestionWhereInputSchema'
import { VolunteerQuestionOrderByWithRelationInputSchema } from '../inputTypeSchemas/VolunteerQuestionOrderByWithRelationInputSchema'
import { VolunteerQuestionWhereUniqueInputSchema } from '../inputTypeSchemas/VolunteerQuestionWhereUniqueInputSchema'

export const VolunteerQuestionAggregateArgsSchema: z.ZodType<Prisma.VolunteerQuestionAggregateArgs> = z.object({
  where: VolunteerQuestionWhereInputSchema.optional(),
  orderBy: z.union([ VolunteerQuestionOrderByWithRelationInputSchema.array(),VolunteerQuestionOrderByWithRelationInputSchema ]).optional(),
  cursor: VolunteerQuestionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default VolunteerQuestionAggregateArgsSchema;
