import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VolunteerQuestionEditsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsMaxOrderByAggregateInput> = z.object({
  questionId: z.lazy(() => SortOrderSchema).optional(),
  editorId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default VolunteerQuestionEditsMaxOrderByAggregateInputSchema;
