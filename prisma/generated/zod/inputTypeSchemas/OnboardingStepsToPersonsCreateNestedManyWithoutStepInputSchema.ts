import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepsToPersonsCreateWithoutStepInputSchema } from './OnboardingStepsToPersonsCreateWithoutStepInputSchema';
import { OnboardingStepsToPersonsUncheckedCreateWithoutStepInputSchema } from './OnboardingStepsToPersonsUncheckedCreateWithoutStepInputSchema';
import { OnboardingStepsToPersonsCreateOrConnectWithoutStepInputSchema } from './OnboardingStepsToPersonsCreateOrConnectWithoutStepInputSchema';
import { OnboardingStepsToPersonsCreateManyStepInputEnvelopeSchema } from './OnboardingStepsToPersonsCreateManyStepInputEnvelopeSchema';
import { OnboardingStepsToPersonsWhereUniqueInputSchema } from './OnboardingStepsToPersonsWhereUniqueInputSchema';

export const OnboardingStepsToPersonsCreateNestedManyWithoutStepInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsCreateNestedManyWithoutStepInput> = z.object({
  create: z.union([ z.lazy(() => OnboardingStepsToPersonsCreateWithoutStepInputSchema),z.lazy(() => OnboardingStepsToPersonsCreateWithoutStepInputSchema).array(),z.lazy(() => OnboardingStepsToPersonsUncheckedCreateWithoutStepInputSchema),z.lazy(() => OnboardingStepsToPersonsUncheckedCreateWithoutStepInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OnboardingStepsToPersonsCreateOrConnectWithoutStepInputSchema),z.lazy(() => OnboardingStepsToPersonsCreateOrConnectWithoutStepInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OnboardingStepsToPersonsCreateManyStepInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema),z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default OnboardingStepsToPersonsCreateNestedManyWithoutStepInputSchema;
