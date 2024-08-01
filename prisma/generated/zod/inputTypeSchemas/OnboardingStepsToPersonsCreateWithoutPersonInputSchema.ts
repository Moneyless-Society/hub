import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepCreateNestedOneWithoutVolunteersInputSchema } from './OnboardingStepCreateNestedOneWithoutVolunteersInputSchema';

export const OnboardingStepsToPersonsCreateWithoutPersonInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsCreateWithoutPersonInput> = z.object({
  complete: z.boolean().optional(),
  doesOnboarding: z.boolean().optional(),
  step: z.lazy(() => OnboardingStepCreateNestedOneWithoutVolunteersInputSchema)
}).strict();

export default OnboardingStepsToPersonsCreateWithoutPersonInputSchema;
