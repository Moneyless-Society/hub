import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepWhereInputSchema } from './OnboardingStepWhereInputSchema';

export const OnboardingStepRelationFilterSchema: z.ZodType<Prisma.OnboardingStepRelationFilter> = z.object({
  is: z.lazy(() => OnboardingStepWhereInputSchema).optional(),
  isNot: z.lazy(() => OnboardingStepWhereInputSchema).optional()
}).strict();

export default OnboardingStepRelationFilterSchema;
