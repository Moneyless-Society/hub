import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionCreateNestedOneWithoutResponsesInputSchema } from './VolunteerQuestionCreateNestedOneWithoutResponsesInputSchema';
import { PersonCreateNestedOneWithoutVolunterResponsesImportedInputSchema } from './PersonCreateNestedOneWithoutVolunterResponsesImportedInputSchema';

export const VolunteerResponseCreateWithoutResponderInputSchema: z.ZodType<Prisma.VolunteerResponseCreateWithoutResponderInput> = z.object({
  answer: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  submittedAt: z.coerce.date().optional().nullable(),
  question: z.lazy(() => VolunteerQuestionCreateNestedOneWithoutResponsesInputSchema),
  importedBy: z.lazy(() => PersonCreateNestedOneWithoutVolunterResponsesImportedInputSchema).optional()
}).strict();

export default VolunteerResponseCreateWithoutResponderInputSchema;
