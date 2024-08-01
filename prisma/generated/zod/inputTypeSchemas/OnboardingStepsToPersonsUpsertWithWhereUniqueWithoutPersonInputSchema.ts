import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepsToPersonsWhereUniqueInputSchema } from './OnboardingStepsToPersonsWhereUniqueInputSchema';
import { OnboardingStepsToPersonsUpdateWithoutPersonInputSchema } from './OnboardingStepsToPersonsUpdateWithoutPersonInputSchema';
import { OnboardingStepsToPersonsUncheckedUpdateWithoutPersonInputSchema } from './OnboardingStepsToPersonsUncheckedUpdateWithoutPersonInputSchema';
import { OnboardingStepsToPersonsCreateWithoutPersonInputSchema } from './OnboardingStepsToPersonsCreateWithoutPersonInputSchema';
import { OnboardingStepsToPersonsUncheckedCreateWithoutPersonInputSchema } from './OnboardingStepsToPersonsUncheckedCreateWithoutPersonInputSchema';

export const OnboardingStepsToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsUpsertWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OnboardingStepsToPersonsUpdateWithoutPersonInputSchema),z.lazy(() => OnboardingStepsToPersonsUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => OnboardingStepsToPersonsCreateWithoutPersonInputSchema),z.lazy(() => OnboardingStepsToPersonsUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default OnboardingStepsToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema;
