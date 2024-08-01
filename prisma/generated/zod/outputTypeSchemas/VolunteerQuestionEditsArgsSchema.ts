import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { VolunteerQuestionEditsSelectSchema } from '../inputTypeSchemas/VolunteerQuestionEditsSelectSchema';
import { VolunteerQuestionEditsIncludeSchema } from '../inputTypeSchemas/VolunteerQuestionEditsIncludeSchema';

export const VolunteerQuestionEditsArgsSchema: z.ZodType<Prisma.VolunteerQuestionEditsDefaultArgs> = z.object({
  select: z.lazy(() => VolunteerQuestionEditsSelectSchema).optional(),
  include: z.lazy(() => VolunteerQuestionEditsIncludeSchema).optional(),
}).strict();

export default VolunteerQuestionEditsArgsSchema;
