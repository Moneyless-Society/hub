import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OnboardingStepsToPersonsCreateManyStepInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsCreateManyStepInput> = z.object({
  personId: z.string(),
  complete: z.boolean().optional(),
  doesOnboarding: z.boolean().optional()
}).strict();

export default OnboardingStepsToPersonsCreateManyStepInputSchema;
