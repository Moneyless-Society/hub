import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionCreateNestedOneWithoutResponsesInputSchema } from './VolunteerQuestionCreateNestedOneWithoutResponsesInputSchema';
import { PersonCreateNestedOneWithoutVolunteerResponsesInputSchema } from './PersonCreateNestedOneWithoutVolunteerResponsesInputSchema';
import { PersonCreateNestedOneWithoutVolunterResponsesImportedInputSchema } from './PersonCreateNestedOneWithoutVolunterResponsesImportedInputSchema';

export const VolunteerResponseCreateInputSchema: z.ZodType<Prisma.VolunteerResponseCreateInput> = z.object({
  answer: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  submittedAt: z.coerce.date().optional().nullable(),
  question: z.lazy(() => VolunteerQuestionCreateNestedOneWithoutResponsesInputSchema),
  responder: z.lazy(() => PersonCreateNestedOneWithoutVolunteerResponsesInputSchema),
  importedBy: z.lazy(() => PersonCreateNestedOneWithoutVolunterResponsesImportedInputSchema).optional()
}).strict();

export default VolunteerResponseCreateInputSchema;
