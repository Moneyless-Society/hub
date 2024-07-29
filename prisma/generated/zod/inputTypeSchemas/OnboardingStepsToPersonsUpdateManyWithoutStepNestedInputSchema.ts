import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepsToPersonsCreateWithoutStepInputSchema } from './OnboardingStepsToPersonsCreateWithoutStepInputSchema';
import { OnboardingStepsToPersonsUncheckedCreateWithoutStepInputSchema } from './OnboardingStepsToPersonsUncheckedCreateWithoutStepInputSchema';
import { OnboardingStepsToPersonsCreateOrConnectWithoutStepInputSchema } from './OnboardingStepsToPersonsCreateOrConnectWithoutStepInputSchema';
import { OnboardingStepsToPersonsUpsertWithWhereUniqueWithoutStepInputSchema } from './OnboardingStepsToPersonsUpsertWithWhereUniqueWithoutStepInputSchema';
import { OnboardingStepsToPersonsCreateManyStepInputEnvelopeSchema } from './OnboardingStepsToPersonsCreateManyStepInputEnvelopeSchema';
import { OnboardingStepsToPersonsWhereUniqueInputSchema } from './OnboardingStepsToPersonsWhereUniqueInputSchema';
import { OnboardingStepsToPersonsUpdateWithWhereUniqueWithoutStepInputSchema } from './OnboardingStepsToPersonsUpdateWithWhereUniqueWithoutStepInputSchema';
import { OnboardingStepsToPersonsUpdateManyWithWhereWithoutStepInputSchema } from './OnboardingStepsToPersonsUpdateManyWithWhereWithoutStepInputSchema';
import { OnboardingStepsToPersonsScalarWhereInputSchema } from './OnboardingStepsToPersonsScalarWhereInputSchema';

export const OnboardingStepsToPersonsUpdateManyWithoutStepNestedInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsUpdateManyWithoutStepNestedInput> = z.object({
  create: z.union([ z.lazy(() => OnboardingStepsToPersonsCreateWithoutStepInputSchema),z.lazy(() => OnboardingStepsToPersonsCreateWithoutStepInputSchema).array(),z.lazy(() => OnboardingStepsToPersonsUncheckedCreateWithoutStepInputSchema),z.lazy(() => OnboardingStepsToPersonsUncheckedCreateWithoutStepInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OnboardingStepsToPersonsCreateOrConnectWithoutStepInputSchema),z.lazy(() => OnboardingStepsToPersonsCreateOrConnectWithoutStepInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OnboardingStepsToPersonsUpsertWithWhereUniqueWithoutStepInputSchema),z.lazy(() => OnboardingStepsToPersonsUpsertWithWhereUniqueWithoutStepInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OnboardingStepsToPersonsCreateManyStepInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema),z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema),z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema),z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema),z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OnboardingStepsToPersonsUpdateWithWhereUniqueWithoutStepInputSchema),z.lazy(() => OnboardingStepsToPersonsUpdateWithWhereUniqueWithoutStepInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OnboardingStepsToPersonsUpdateManyWithWhereWithoutStepInputSchema),z.lazy(() => OnboardingStepsToPersonsUpdateManyWithWhereWithoutStepInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OnboardingStepsToPersonsScalarWhereInputSchema),z.lazy(() => OnboardingStepsToPersonsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default OnboardingStepsToPersonsUpdateManyWithoutStepNestedInputSchema;
