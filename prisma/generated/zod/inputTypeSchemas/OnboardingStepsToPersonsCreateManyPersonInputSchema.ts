import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OnboardingStepsToPersonsCreateManyPersonInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsCreateManyPersonInput> = z.object({
  stepId: z.number().int(),
  complete: z.boolean().optional(),
  doesOnboarding: z.boolean().optional()
}).strict();

export default OnboardingStepsToPersonsCreateManyPersonInputSchema;
