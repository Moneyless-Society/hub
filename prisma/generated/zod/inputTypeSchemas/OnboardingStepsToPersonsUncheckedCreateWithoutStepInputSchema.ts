import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OnboardingStepsToPersonsUncheckedCreateWithoutStepInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsUncheckedCreateWithoutStepInput> = z.object({
  personId: z.string(),
  complete: z.boolean().optional(),
  doesOnboarding: z.boolean().optional()
}).strict();

export default OnboardingStepsToPersonsUncheckedCreateWithoutStepInputSchema;
