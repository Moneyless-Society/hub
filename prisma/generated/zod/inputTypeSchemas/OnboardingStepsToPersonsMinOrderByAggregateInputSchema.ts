import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OnboardingStepsToPersonsMinOrderByAggregateInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsMinOrderByAggregateInput> = z.object({
  stepId: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  complete: z.lazy(() => SortOrderSchema).optional(),
  doesOnboarding: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default OnboardingStepsToPersonsMinOrderByAggregateInputSchema;
