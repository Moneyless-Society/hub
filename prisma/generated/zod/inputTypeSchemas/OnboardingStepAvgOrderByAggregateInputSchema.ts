import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OnboardingStepAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OnboardingStepAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default OnboardingStepAvgOrderByAggregateInputSchema;
