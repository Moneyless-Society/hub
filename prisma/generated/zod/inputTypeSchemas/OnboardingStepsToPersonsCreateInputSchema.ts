import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepCreateNestedOneWithoutVolunteersInputSchema } from './OnboardingStepCreateNestedOneWithoutVolunteersInputSchema';
import { PersonCreateNestedOneWithoutOnboardingInputSchema } from './PersonCreateNestedOneWithoutOnboardingInputSchema';

export const OnboardingStepsToPersonsCreateInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsCreateInput> = z.object({
  complete: z.boolean().optional(),
  doesOnboarding: z.boolean().optional(),
  step: z.lazy(() => OnboardingStepCreateNestedOneWithoutVolunteersInputSchema),
  person: z.lazy(() => PersonCreateNestedOneWithoutOnboardingInputSchema)
}).strict();

export default OnboardingStepsToPersonsCreateInputSchema;
