import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepCreateWithoutVolunteersInputSchema } from './OnboardingStepCreateWithoutVolunteersInputSchema';
import { OnboardingStepUncheckedCreateWithoutVolunteersInputSchema } from './OnboardingStepUncheckedCreateWithoutVolunteersInputSchema';
import { OnboardingStepCreateOrConnectWithoutVolunteersInputSchema } from './OnboardingStepCreateOrConnectWithoutVolunteersInputSchema';
import { OnboardingStepWhereUniqueInputSchema } from './OnboardingStepWhereUniqueInputSchema';

export const OnboardingStepCreateNestedOneWithoutVolunteersInputSchema: z.ZodType<Prisma.OnboardingStepCreateNestedOneWithoutVolunteersInput> = z.object({
  create: z.union([ z.lazy(() => OnboardingStepCreateWithoutVolunteersInputSchema),z.lazy(() => OnboardingStepUncheckedCreateWithoutVolunteersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OnboardingStepCreateOrConnectWithoutVolunteersInputSchema).optional(),
  connect: z.lazy(() => OnboardingStepWhereUniqueInputSchema).optional()
}).strict();

export default OnboardingStepCreateNestedOneWithoutVolunteersInputSchema;
