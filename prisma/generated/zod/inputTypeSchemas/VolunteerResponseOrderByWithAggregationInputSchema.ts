import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { VolunteerResponseCountOrderByAggregateInputSchema } from './VolunteerResponseCountOrderByAggregateInputSchema';
import { VolunteerResponseAvgOrderByAggregateInputSchema } from './VolunteerResponseAvgOrderByAggregateInputSchema';
import { VolunteerResponseMaxOrderByAggregateInputSchema } from './VolunteerResponseMaxOrderByAggregateInputSchema';
import { VolunteerResponseMinOrderByAggregateInputSchema } from './VolunteerResponseMinOrderByAggregateInputSchema';
import { VolunteerResponseSumOrderByAggregateInputSchema } from './VolunteerResponseSumOrderByAggregateInputSchema';

export const VolunteerResponseOrderByWithAggregationInputSchema: z.ZodType<Prisma.VolunteerResponseOrderByWithAggregationInput> = z.object({
  questionId: z.lazy(() => SortOrderSchema).optional(),
  responderId: z.lazy(() => SortOrderSchema).optional(),
  answer: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  importerId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  submittedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => VolunteerResponseCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => VolunteerResponseAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VolunteerResponseMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VolunteerResponseMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => VolunteerResponseSumOrderByAggregateInputSchema).optional()
}).strict();

export default VolunteerResponseOrderByWithAggregationInputSchema;
