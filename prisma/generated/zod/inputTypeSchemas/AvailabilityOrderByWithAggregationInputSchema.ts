import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AvailabilityCountOrderByAggregateInputSchema } from './AvailabilityCountOrderByAggregateInputSchema';
import { AvailabilityAvgOrderByAggregateInputSchema } from './AvailabilityAvgOrderByAggregateInputSchema';
import { AvailabilityMaxOrderByAggregateInputSchema } from './AvailabilityMaxOrderByAggregateInputSchema';
import { AvailabilityMinOrderByAggregateInputSchema } from './AvailabilityMinOrderByAggregateInputSchema';
import { AvailabilitySumOrderByAggregateInputSchema } from './AvailabilitySumOrderByAggregateInputSchema';

export const AvailabilityOrderByWithAggregationInputSchema: z.ZodType<Prisma.AvailabilityOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  endDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => AvailabilityCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AvailabilityAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AvailabilityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AvailabilityMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AvailabilitySumOrderByAggregateInputSchema).optional()
}).strict();

export default AvailabilityOrderByWithAggregationInputSchema;
