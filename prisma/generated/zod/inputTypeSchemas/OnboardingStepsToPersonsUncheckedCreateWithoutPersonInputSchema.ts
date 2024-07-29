import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OnboardingStepsToPersonsUncheckedCreateWithoutPersonInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsUncheckedCreateWithoutPersonInput> = z.object({
  stepId: z.number().int(),
  complete: z.boolean().optional(),
  doesOnboarding: z.boolean().optional()
}).strict();

export default OnboardingStepsToPersonsUncheckedCreateWithoutPersonInputSchema;
