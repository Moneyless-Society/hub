import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionEditsCreateManyInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsCreateManyInputSchema'

export const VolunteerQuestionEditsCreateManyArgsSchema: z.ZodType<Prisma.VolunteerQuestionEditsCreateManyArgs> = z.object({
  data: z.union([ VolunteerQuestionEditsCreateManyInputSchema,VolunteerQuestionEditsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default VolunteerQuestionEditsCreateManyArgsSchema;
