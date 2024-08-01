import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OnboardingStepsToPersonsCountOrderByAggregateInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsCountOrderByAggregateInput> = z.object({
  stepId: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  complete: z.lazy(() => SortOrderSchema).optional(),
  doesOnboarding: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default OnboardingStepsToPersonsCountOrderByAggregateInputSchema;
