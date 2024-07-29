import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepsToPersonsWhereInputSchema } from './OnboardingStepsToPersonsWhereInputSchema';

export const OnboardingStepsToPersonsListRelationFilterSchema: z.ZodType<Prisma.OnboardingStepsToPersonsListRelationFilter> = z.object({
  every: z.lazy(() => OnboardingStepsToPersonsWhereInputSchema).optional(),
  some: z.lazy(() => OnboardingStepsToPersonsWhereInputSchema).optional(),
  none: z.lazy(() => OnboardingStepsToPersonsWhereInputSchema).optional()
}).strict();

export default OnboardingStepsToPersonsListRelationFilterSchema;
