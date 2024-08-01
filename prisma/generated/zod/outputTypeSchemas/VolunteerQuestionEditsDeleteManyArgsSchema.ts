import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionEditsWhereInputSchema } from '../inputTypeSchemas/VolunteerQuestionEditsWhereInputSchema'

export const VolunteerQuestionEditsDeleteManyArgsSchema: z.ZodType<Prisma.VolunteerQuestionEditsDeleteManyArgs> = z.object({
  where: VolunteerQuestionEditsWhereInputSchema.optional(),
}).strict() ;

export default VolunteerQuestionEditsDeleteManyArgsSchema;
