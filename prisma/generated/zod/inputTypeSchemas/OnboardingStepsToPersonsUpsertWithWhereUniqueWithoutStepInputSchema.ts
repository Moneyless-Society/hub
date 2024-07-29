import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepsToPersonsWhereUniqueInputSchema } from './OnboardingStepsToPersonsWhereUniqueInputSchema';
import { OnboardingStepsToPersonsUpdateWithoutStepInputSchema } from './OnboardingStepsToPersonsUpdateWithoutStepInputSchema';
import { OnboardingStepsToPersonsUncheckedUpdateWithoutStepInputSchema } from './OnboardingStepsToPersonsUncheckedUpdateWithoutStepInputSchema';
import { OnboardingStepsToPersonsCreateWithoutStepInputSchema } from './OnboardingStepsToPersonsCreateWithoutStepInputSchema';
import { OnboardingStepsToPersonsUncheckedCreateWithoutStepInputSchema } from './OnboardingStepsToPersonsUncheckedCreateWithoutStepInputSchema';

export const OnboardingStepsToPersonsUpsertWithWhereUniqueWithoutStepInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsUpsertWithWhereUniqueWithoutStepInput> = z.object({
  where: z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OnboardingStepsToPersonsUpdateWithoutStepInputSchema),z.lazy(() => OnboardingStepsToPersonsUncheckedUpdateWithoutStepInputSchema) ]),
  create: z.union([ z.lazy(() => OnboardingStepsToPersonsCreateWithoutStepInputSchema),z.lazy(() => OnboardingStepsToPersonsUncheckedCreateWithoutStepInputSchema) ]),
}).strict();

export default OnboardingStepsToPersonsUpsertWithWhereUniqueWithoutStepInputSchema;
