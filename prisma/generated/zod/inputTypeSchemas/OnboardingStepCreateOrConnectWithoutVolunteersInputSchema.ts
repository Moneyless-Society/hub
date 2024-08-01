import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepWhereUniqueInputSchema } from './OnboardingStepWhereUniqueInputSchema';
import { OnboardingStepCreateWithoutVolunteersInputSchema } from './OnboardingStepCreateWithoutVolunteersInputSchema';
import { OnboardingStepUncheckedCreateWithoutVolunteersInputSchema } from './OnboardingStepUncheckedCreateWithoutVolunteersInputSchema';

export const OnboardingStepCreateOrConnectWithoutVolunteersInputSchema: z.ZodType<Prisma.OnboardingStepCreateOrConnectWithoutVolunteersInput> = z.object({
  where: z.lazy(() => OnboardingStepWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OnboardingStepCreateWithoutVolunteersInputSchema),z.lazy(() => OnboardingStepUncheckedCreateWithoutVolunteersInputSchema) ]),
}).strict();

export default OnboardingStepCreateOrConnectWithoutVolunteersInputSchema;
