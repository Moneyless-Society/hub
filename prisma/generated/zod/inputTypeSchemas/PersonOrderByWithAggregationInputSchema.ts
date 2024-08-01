import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PersonCountOrderByAggregateInputSchema } from './PersonCountOrderByAggregateInputSchema';
import { PersonAvgOrderByAggregateInputSchema } from './PersonAvgOrderByAggregateInputSchema';
import { PersonMaxOrderByAggregateInputSchema } from './PersonMaxOrderByAggregateInputSchema';
import { PersonMinOrderByAggregateInputSchema } from './PersonMinOrderByAggregateInputSchema';
import { PersonSumOrderByAggregateInputSchema } from './PersonSumOrderByAggregateInputSchema';

export const PersonOrderByWithAggregationInputSchema: z.ZodType<Prisma.PersonOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  pronouns: z.lazy(() => SortOrderSchema).optional(),
  bio: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  preferredContactMethod: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  volunteerQuestionId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PersonCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PersonAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PersonMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PersonMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PersonSumOrderByAggregateInputSchema).optional()
}).strict();

export default PersonOrderByWithAggregationInputSchema;
