import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateNestedOneWithoutVolunteerResponsesInputSchema } from './PersonCreateNestedOneWithoutVolunteerResponsesInputSchema';
import { PersonCreateNestedOneWithoutVolunterResponsesImportedInputSchema } from './PersonCreateNestedOneWithoutVolunterResponsesImportedInputSchema';

export const VolunteerResponseCreateWithoutQuestionInputSchema: z.ZodType<Prisma.VolunteerResponseCreateWithoutQuestionInput> = z.object({
  answer: z.string(),
  updatedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  submittedAt: z.coerce.date().optional().nullable(),
  responder: z.lazy(() => PersonCreateNestedOneWithoutVolunteerResponsesInputSchema),
  importedBy: z.lazy(() => PersonCreateNestedOneWithoutVolunterResponsesImportedInputSchema).optional()
}).strict();

export default VolunteerResponseCreateWithoutQuestionInputSchema;
