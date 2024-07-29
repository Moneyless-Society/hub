import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OnboardingStepsToPersonsSumOrderByAggregateInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsSumOrderByAggregateInput> = z.object({
  stepId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default OnboardingStepsToPersonsSumOrderByAggregateInputSchema;
