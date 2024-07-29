import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionCreateManyInputSchema } from '../inputTypeSchemas/VolunteerQuestionCreateManyInputSchema'

export const VolunteerQuestionCreateManyArgsSchema: z.ZodType<Prisma.VolunteerQuestionCreateManyArgs> = z.object({
  data: z.union([ VolunteerQuestionCreateManyInputSchema,VolunteerQuestionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default VolunteerQuestionCreateManyArgsSchema;
