import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OnboardingStepSumOrderByAggregateInputSchema: z.ZodType<Prisma.OnboardingStepSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default OnboardingStepSumOrderByAggregateInputSchema;
