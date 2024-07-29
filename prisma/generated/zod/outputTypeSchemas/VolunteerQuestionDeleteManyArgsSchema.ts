import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionWhereInputSchema } from '../inputTypeSchemas/VolunteerQuestionWhereInputSchema'

export const VolunteerQuestionDeleteManyArgsSchema: z.ZodType<Prisma.VolunteerQuestionDeleteManyArgs> = z.object({
  where: VolunteerQuestionWhereInputSchema.optional(),
}).strict() ;

export default VolunteerQuestionDeleteManyArgsSchema;
