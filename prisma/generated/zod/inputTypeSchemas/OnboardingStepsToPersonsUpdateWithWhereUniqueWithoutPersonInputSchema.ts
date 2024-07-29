import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepsToPersonsWhereUniqueInputSchema } from './OnboardingStepsToPersonsWhereUniqueInputSchema';
import { OnboardingStepsToPersonsUpdateWithoutPersonInputSchema } from './OnboardingStepsToPersonsUpdateWithoutPersonInputSchema';
import { OnboardingStepsToPersonsUncheckedUpdateWithoutPersonInputSchema } from './OnboardingStepsToPersonsUncheckedUpdateWithoutPersonInputSchema';

export const OnboardingStepsToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsUpdateWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OnboardingStepsToPersonsUpdateWithoutPersonInputSchema),z.lazy(() => OnboardingStepsToPersonsUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export default OnboardingStepsToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema;
