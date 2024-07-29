import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionUpdateManyMutationInputSchema } from '../inputTypeSchemas/VolunteerQuestionUpdateManyMutationInputSchema'
import { VolunteerQuestionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/VolunteerQuestionUncheckedUpdateManyInputSchema'
import { VolunteerQuestionWhereInputSchema } from '../inputTypeSchemas/VolunteerQuestionWhereInputSchema'

export const VolunteerQuestionUpdateManyArgsSchema: z.ZodType<Prisma.VolunteerQuestionUpdateManyArgs> = z.object({
  data: z.union([ VolunteerQuestionUpdateManyMutationInputSchema,VolunteerQuestionUncheckedUpdateManyInputSchema ]),
  where: VolunteerQuestionWhereInputSchema.optional(),
}).strict() ;

export default VolunteerQuestionUpdateManyArgsSchema;
