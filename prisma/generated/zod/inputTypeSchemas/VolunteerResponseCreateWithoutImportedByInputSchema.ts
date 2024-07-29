import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionCreateNestedOneWithoutResponsesInputSchema } from './VolunteerQuestionCreateNestedOneWithoutResponsesInputSchema';
import { PersonCreateNestedOneWithoutVolunteerResponsesInputSchema } from './PersonCreateNestedOneWithoutVolunteerResponsesInputSchema';

export const VolunteerResponseCreateWithoutImportedByInputSchema: z.ZodType<Prisma.VolunteerResponseCreateWithoutImportedByInput> = z.object({
  answer: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  submittedAt: z.coerce.date().optional().nullable(),
  question: z.lazy(() => VolunteerQuestionCreateNestedOneWithoutResponsesInputSchema),
  responder: z.lazy(() => PersonCreateNestedOneWithoutVolunteerResponsesInputSchema)
}).strict();

export default VolunteerResponseCreateWithoutImportedByInputSchema;
