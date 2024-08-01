import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionEditsUpdateManyMutationInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsUpdateManyMutationInputSchema'
import { VolunteerQuestionEditsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsUncheckedUpdateManyInputSchema'
import { VolunteerQuestionEditsWhereInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsWhereInputSchema'

export const VolunteerQuestionEditsUpdateManyArgsSchema: z.ZodType<Prisma.VolunteerQuestionEditsUpdateManyArgs> = z.object({
  data: z.union([ VolunteerQuestionEditsUpdateManyMutationInputSchema,VolunteerQuestionEditsUncheckedUpdateManyInputSchema ]),
  where: VolunteerQuestionEditsWhereInputSchema.optional(),
}).strict() ;

export default VolunteerQuestionEditsUpdateManyArgsSchema;
