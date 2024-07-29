import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionEditsCreateManyEditorInputSchema } from './VolunteerQuestionEditsCreateManyEditorInputSchema';

export const VolunteerQuestionEditsCreateManyEditorInputEnvelopeSchema: z.ZodType<Prisma.VolunteerQuestionEditsCreateManyEditorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => VolunteerQuestionEditsCreateManyEditorInputSchema),z.lazy(() => VolunteerQuestionEditsCreateManyEditorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default VolunteerQuestionEditsCreateManyEditorInputEnvelopeSchema;
