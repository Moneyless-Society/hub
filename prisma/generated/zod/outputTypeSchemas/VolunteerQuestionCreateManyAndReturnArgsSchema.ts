import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionCreateManyInputSchema } from '../inputTypeSchemas/VolunteerQuestionCreateManyInputSchema'

export const VolunteerQuestionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.VolunteerQuestionCreateManyAndReturnArgs> = z.object({
  data: z.union([ VolunteerQuestionCreateManyInputSchema,VolunteerQuestionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default VolunteerQuestionCreateManyAndReturnArgsSchema;
