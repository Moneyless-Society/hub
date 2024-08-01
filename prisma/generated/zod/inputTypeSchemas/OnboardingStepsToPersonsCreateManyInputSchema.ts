import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OnboardingStepsToPersonsCreateManyInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsCreateManyInput> = z.object({
  stepId: z.number().int(),
  personId: z.string(),
  complete: z.boolean().optional(),
  doesOnboarding: z.boolean().optional()
}).strict();

export default OnboardingStepsToPersonsCreateManyInputSchema;
