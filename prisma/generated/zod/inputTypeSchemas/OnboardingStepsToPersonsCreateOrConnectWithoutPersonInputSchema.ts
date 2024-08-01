import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepsToPersonsWhereUniqueInputSchema } from './OnboardingStepsToPersonsWhereUniqueInputSchema';
import { OnboardingStepsToPersonsCreateWithoutPersonInputSchema } from './OnboardingStepsToPersonsCreateWithoutPersonInputSchema';
import { OnboardingStepsToPersonsUncheckedCreateWithoutPersonInputSchema } from './OnboardingStepsToPersonsUncheckedCreateWithoutPersonInputSchema';

export const OnboardingStepsToPersonsCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OnboardingStepsToPersonsCreateWithoutPersonInputSchema),z.lazy(() => OnboardingStepsToPersonsUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default OnboardingStepsToPersonsCreateOrConnectWithoutPersonInputSchema;
