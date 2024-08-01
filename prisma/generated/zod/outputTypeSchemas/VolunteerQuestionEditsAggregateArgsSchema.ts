import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionEditsWhereInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsWhereInputSchema'
import { VolunteerQuestionEditsOrderByWithRelationInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsOrderByWithRelationInputSchema'
import { VolunteerQuestionEditsWhereUniqueInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsWhereUniqueInputSchema'

export const VolunteerQuestionEditsAggregateArgsSchema: z.ZodType<Prisma.VolunteerQuestionEditsAggregateArgs> = z.object({
  where: VolunteerQuestionEditsWhereInputSchema.optional(),
  orderBy: z.union([ VolunteerQuestionEditsOrderByWithRelationInputSchema.array(),VolunteerQuestionEditsOrderByWithRelationInputSchema ]).optional(),
  cursor: VolunteerQuestionEditsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default VolunteerQuestionEditsAggregateArgsSchema;
