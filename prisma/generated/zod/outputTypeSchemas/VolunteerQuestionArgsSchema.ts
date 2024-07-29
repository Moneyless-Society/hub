import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionSelectSchema } from '../inputTypeSchemas/VolunteerQuestionSelectSchema';
import { VolunteerQuestionIncludeSchema } from '../inputTypeSchemas/VolunteerQuestionIncludeSchema';

export const VolunteerQuestionArgsSchema: z.ZodType<Prisma.VolunteerQuestionDefaultArgs> = z.object({
  select: z.lazy(() => VolunteerQuestionSelectSchema).optional(),
  include: z.lazy(() => VolunteerQuestionIncludeSchema).optional(),
}).strict();

export default VolunteerQuestionArgsSchema;
