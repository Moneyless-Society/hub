import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OnboardingStepsToPersonsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsAvgOrderByAggregateInput> = z.object({
  stepId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default OnboardingStepsToPersonsAvgOrderByAggregateInputSchema;
