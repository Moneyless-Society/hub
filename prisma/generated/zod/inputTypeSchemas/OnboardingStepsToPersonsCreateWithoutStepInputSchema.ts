import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateNestedOneWithoutOnboardingInputSchema } from './PersonCreateNestedOneWithoutOnboardingInputSchema';

export const OnboardingStepsToPersonsCreateWithoutStepInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsCreateWithoutStepInput> = z.object({
  complete: z.boolean().optional(),
  doesOnboarding: z.boolean().optional(),
  person: z.lazy(() => PersonCreateNestedOneWithoutOnboardingInputSchema)
}).strict();

export default OnboardingStepsToPersonsCreateWithoutStepInputSchema;
