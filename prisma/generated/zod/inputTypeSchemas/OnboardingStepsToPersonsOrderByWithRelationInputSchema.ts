import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { OnboardingStepOrderByWithRelationInputSchema } from './OnboardingStepOrderByWithRelationInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';

export const OnboardingStepsToPersonsOrderByWithRelationInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsOrderByWithRelationInput> = z.object({
  stepId: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  complete: z.lazy(() => SortOrderSchema).optional(),
  doesOnboarding: z.lazy(() => SortOrderSchema).optional(),
  step: z.lazy(() => OnboardingStepOrderByWithRelationInputSchema).optional(),
  person: z.lazy(() => PersonOrderByWithRelationInputSchema).optional()
}).strict();

export default OnboardingStepsToPersonsOrderByWithRelationInputSchema;
