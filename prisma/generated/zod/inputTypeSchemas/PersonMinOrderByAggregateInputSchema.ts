import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonMinOrderByAggregateInputSchema: z.ZodType<Prisma.PersonMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  bio: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  preferredContactMethod: z.lazy(() => SortOrderSchema).optional(),
  volunteerQuestionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonMinOrderByAggregateInputSchema;
