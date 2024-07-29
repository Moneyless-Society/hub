import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { VolunteerQuestionCountOrderByAggregateInputSchema } from './VolunteerQuestionCountOrderByAggregateInputSchema';
import { VolunteerQuestionAvgOrderByAggregateInputSchema } from './VolunteerQuestionAvgOrderByAggregateInputSchema';
import { VolunteerQuestionMaxOrderByAggregateInputSchema } from './VolunteerQuestionMaxOrderByAggregateInputSchema';
import { VolunteerQuestionMinOrderByAggregateInputSchema } from './VolunteerQuestionMinOrderByAggregateInputSchema';
import { VolunteerQuestionSumOrderByAggregateInputSchema } from './VolunteerQuestionSumOrderByAggregateInputSchema';

export const VolunteerQuestionOrderByWithAggregationInputSchema: z.ZodType<Prisma.VolunteerQuestionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VolunteerQuestionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => VolunteerQuestionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VolunteerQuestionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VolunteerQuestionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => VolunteerQuestionSumOrderByAggregateInputSchema).optional()
}).strict();

export default VolunteerQuestionOrderByWithAggregationInputSchema;
