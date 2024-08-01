import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VolunteerQuestionMinOrderByAggregateInputSchema: z.ZodType<Prisma.VolunteerQuestionMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default VolunteerQuestionMinOrderByAggregateInputSchema;
