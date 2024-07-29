import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { OnboardingStepsToPersonsOrderByRelationAggregateInputSchema } from './OnboardingStepsToPersonsOrderByRelationAggregateInputSchema';

export const OnboardingStepOrderByWithRelationInputSchema: z.ZodType<Prisma.OnboardingStepOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  volunteers: z.lazy(() => OnboardingStepsToPersonsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default OnboardingStepOrderByWithRelationInputSchema;
