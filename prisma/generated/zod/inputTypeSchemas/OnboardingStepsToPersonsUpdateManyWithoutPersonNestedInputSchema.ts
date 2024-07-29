import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepsToPersonsCreateWithoutPersonInputSchema } from './OnboardingStepsToPersonsCreateWithoutPersonInputSchema';
import { OnboardingStepsToPersonsUncheckedCreateWithoutPersonInputSchema } from './OnboardingStepsToPersonsUncheckedCreateWithoutPersonInputSchema';
import { OnboardingStepsToPersonsCreateOrConnectWithoutPersonInputSchema } from './OnboardingStepsToPersonsCreateOrConnectWithoutPersonInputSchema';
import { OnboardingStepsToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema } from './OnboardingStepsToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema';
import { OnboardingStepsToPersonsCreateManyPersonInputEnvelopeSchema } from './OnboardingStepsToPersonsCreateManyPersonInputEnvelopeSchema';
import { OnboardingStepsToPersonsWhereUniqueInputSchema } from './OnboardingStepsToPersonsWhereUniqueInputSchema';
import { OnboardingStepsToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema } from './OnboardingStepsToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema';
import { OnboardingStepsToPersonsUpdateManyWithWhereWithoutPersonInputSchema } from './OnboardingStepsToPersonsUpdateManyWithWhereWithoutPersonInputSchema';
import { OnboardingStepsToPersonsScalarWhereInputSchema } from './OnboardingStepsToPersonsScalarWhereInputSchema';

export const OnboardingStepsToPersonsUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => OnboardingStepsToPersonsCreateWithoutPersonInputSchema),z.lazy(() => OnboardingStepsToPersonsCreateWithoutPersonInputSchema).array(),z.lazy(() => OnboardingStepsToPersonsUncheckedCreateWithoutPersonInputSchema),z.lazy(() => OnboardingStepsToPersonsUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OnboardingStepsToPersonsCreateOrConnectWithoutPersonInputSchema),z.lazy(() => OnboardingStepsToPersonsCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OnboardingStepsToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => OnboardingStepsToPersonsUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OnboardingStepsToPersonsCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema),z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema),z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema),z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema),z.lazy(() => OnboardingStepsToPersonsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OnboardingStepsToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => OnboardingStepsToPersonsUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OnboardingStepsToPersonsUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => OnboardingStepsToPersonsUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OnboardingStepsToPersonsScalarWhereInputSchema),z.lazy(() => OnboardingStepsToPersonsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default OnboardingStepsToPersonsUpdateManyWithoutPersonNestedInputSchema;
