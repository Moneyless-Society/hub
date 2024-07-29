import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepsToPersonsCreateWithoutPersonInputSchema } from './OnboardingStepsToPersonsCreateWithoutPersonInputSchema';
import { OnboardingStepsToPersonsUncheckedCreateWithoutPersonInputSchema } from './OnboardingStepsToPersonsUncheckedCreateWithoutPersonInputSchema';
import { OnboardingStepsToPersonsCreateOrConnectWithoutPersonInputSchema } from './OnboardingStepsToPersonsCreateOrConnectWithoutPersonInputSchema';
import { OnboardingStepsToPersonsCreateManyPersonInputEnvelopeSchema } from './OnboardingStepsToPersonsCreateManyPersonInputEnvelopeSchema';
import { OnboardingStepsToPersonsWhereUniqueInputSchema } from './OnboardingStepsToPersonsWhereUniqueInputSchema';

export const OnboardingStepsToPersonsCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => OnboardingStepsToPersonsCreateWithoutPersonInputSchema),z.lazy(() => OnboardingStepsToPersonsCreateWithoutPersonInputSchema).array(),z.lazy(() => OnboardingStepsToPersonsUncheckedCreateWithoutPersonInputSchema),z.lazy(() => OnboardingStepsToPersonsUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OnboardingStepsToPersonsCreateOrConnectWithoutPersonInputSchema),z.lazy(() => OnboardingStepsToPersonsCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OnboardingStepsToPersonsCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema),z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default OnboardingStepsToPersonsCreateNestedManyWithoutPersonInputSchema;
