import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OnboardingStepsToPersonsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default OnboardingStepsToPersonsOrderByRelationAggregateInputSchema;
