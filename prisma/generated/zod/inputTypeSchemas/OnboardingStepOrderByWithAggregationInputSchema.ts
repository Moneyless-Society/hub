import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { OnboardingStepCountOrderByAggregateInputSchema } from './OnboardingStepCountOrderByAggregateInputSchema';
import { OnboardingStepAvgOrderByAggregateInputSchema } from './OnboardingStepAvgOrderByAggregateInputSchema';
import { OnboardingStepMaxOrderByAggregateInputSchema } from './OnboardingStepMaxOrderByAggregateInputSchema';
import { OnboardingStepMinOrderByAggregateInputSchema } from './OnboardingStepMinOrderByAggregateInputSchema';
import { OnboardingStepSumOrderByAggregateInputSchema } from './OnboardingStepSumOrderByAggregateInputSchema';

export const OnboardingStepOrderByWithAggregationInputSchema: z.ZodType<Prisma.OnboardingStepOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => OnboardingStepCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OnboardingStepAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OnboardingStepMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OnboardingStepMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OnboardingStepSumOrderByAggregateInputSchema).optional()
}).strict();

export default OnboardingStepOrderByWithAggregationInputSchema;
