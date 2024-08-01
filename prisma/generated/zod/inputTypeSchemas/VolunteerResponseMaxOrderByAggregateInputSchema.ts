import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VolunteerResponseMaxOrderByAggregateInputSchema: z.ZodType<Prisma.VolunteerResponseMaxOrderByAggregateInput> = z.object({
  questionId: z.lazy(() => SortOrderSchema).optional(),
  responderId: z.lazy(() => SortOrderSchema).optional(),
  answer: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  importerId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  submittedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default VolunteerResponseMaxOrderByAggregateInputSchema;
