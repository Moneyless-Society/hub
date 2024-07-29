import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepsToPersonsWhereUniqueInputSchema } from './OnboardingStepsToPersonsWhereUniqueInputSchema';
import { OnboardingStepsToPersonsUpdateWithoutStepInputSchema } from './OnboardingStepsToPersonsUpdateWithoutStepInputSchema';
import { OnboardingStepsToPersonsUncheckedUpdateWithoutStepInputSchema } from './OnboardingStepsToPersonsUncheckedUpdateWithoutStepInputSchema';

export const OnboardingStepsToPersonsUpdateWithWhereUniqueWithoutStepInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsUpdateWithWhereUniqueWithoutStepInput> = z.object({
  where: z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OnboardingStepsToPersonsUpdateWithoutStepInputSchema),z.lazy(() => OnboardingStepsToPersonsUncheckedUpdateWithoutStepInputSchema) ]),
}).strict();

export default OnboardingStepsToPersonsUpdateWithWhereUniqueWithoutStepInputSchema;
