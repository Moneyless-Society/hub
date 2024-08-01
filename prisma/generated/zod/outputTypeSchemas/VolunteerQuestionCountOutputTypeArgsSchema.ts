import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionCountOutputTypeSelectSchema } from './VolunteerQuestionCountOutputTypeSelectSchema';

export const VolunteerQuestionCountOutputTypeArgsSchema: z.ZodType<Prisma.VolunteerQuestionCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => VolunteerQuestionCountOutputTypeSelectSchema).nullish(),
}).strict();

export default VolunteerQuestionCountOutputTypeSelectSchema;
