import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PersonAvgOrderByAggregateInput> = z.object({
  volunteerQuestionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonAvgOrderByAggregateInputSchema;
