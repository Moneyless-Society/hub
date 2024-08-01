import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { OnboardingStepsToPersonsCountOrderByAggregateInputSchema } from './OnboardingStepsToPersonsCountOrderByAggregateInputSchema';
import { OnboardingStepsToPersonsAvgOrderByAggregateInputSchema } from './OnboardingStepsToPersonsAvgOrderByAggregateInputSchema';
import { OnboardingStepsToPersonsMaxOrderByAggregateInputSchema } from './OnboardingStepsToPersonsMaxOrderByAggregateInputSchema';
import { OnboardingStepsToPersonsMinOrderByAggregateInputSchema } from './OnboardingStepsToPersonsMinOrderByAggregateInputSchema';
import { OnboardingStepsToPersonsSumOrderByAggregateInputSchema } from './OnboardingStepsToPersonsSumOrderByAggregateInputSchema';

export const OnboardingStepsToPersonsOrderByWithAggregationInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsOrderByWithAggregationInput> = z.object({
  stepId: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  complete: z.lazy(() => SortOrderSchema).optional(),
  doesOnboarding: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OnboardingStepsToPersonsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OnboardingStepsToPersonsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OnboardingStepsToPersonsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OnboardingStepsToPersonsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OnboardingStepsToPersonsSumOrderByAggregateInputSchema).optional()
}).strict();

export default OnboardingStepsToPersonsOrderByWithAggregationInputSchema;
