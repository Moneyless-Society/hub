import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionUpdatetextInputSchema } from './VolunteerQuestionUpdatetextInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const VolunteerQuestionUpdateManyMutationInputSchema: z.ZodType<Prisma.VolunteerQuestionUpdateManyMutationInput> = z.object({
  text: z.union([ z.lazy(() => VolunteerQuestionUpdatetextInputSchema),z.string().array() ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default VolunteerQuestionUpdateManyMutationInputSchema;
