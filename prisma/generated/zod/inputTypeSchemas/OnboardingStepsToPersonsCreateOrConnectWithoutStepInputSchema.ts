import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepsToPersonsWhereUniqueInputSchema } from './OnboardingStepsToPersonsWhereUniqueInputSchema';
import { OnboardingStepsToPersonsCreateWithoutStepInputSchema } from './OnboardingStepsToPersonsCreateWithoutStepInputSchema';
import { OnboardingStepsToPersonsUncheckedCreateWithoutStepInputSchema } from './OnboardingStepsToPersonsUncheckedCreateWithoutStepInputSchema';

export const OnboardingStepsToPersonsCreateOrConnectWithoutStepInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsCreateOrConnectWithoutStepInput> = z.object({
  where: z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OnboardingStepsToPersonsCreateWithoutStepInputSchema),z.lazy(() => OnboardingStepsToPersonsUncheckedCreateWithoutStepInputSchema) ]),
}).strict();

export default OnboardingStepsToPersonsCreateOrConnectWithoutStepInputSchema;
