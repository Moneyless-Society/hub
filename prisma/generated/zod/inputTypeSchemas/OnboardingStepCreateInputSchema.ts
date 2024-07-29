import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepsToPersonsCreateNestedManyWithoutStepInputSchema } from './OnboardingStepsToPersonsCreateNestedManyWithoutStepInputSchema';

export const OnboardingStepCreateInputSchema: z.ZodType<Prisma.OnboardingStepCreateInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  volunteers: z.lazy(() => OnboardingStepsToPersonsCreateNestedManyWithoutStepInputSchema).optional()
}).strict();

export default OnboardingStepCreateInputSchema;
