import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepCreateWithoutVolunteersInputSchema } from './OnboardingStepCreateWithoutVolunteersInputSchema';
import { OnboardingStepUncheckedCreateWithoutVolunteersInputSchema } from './OnboardingStepUncheckedCreateWithoutVolunteersInputSchema';
import { OnboardingStepCreateOrConnectWithoutVolunteersInputSchema } from './OnboardingStepCreateOrConnectWithoutVolunteersInputSchema';
import { OnboardingStepUpsertWithoutVolunteersInputSchema } from './OnboardingStepUpsertWithoutVolunteersInputSchema';
import { OnboardingStepWhereUniqueInputSchema } from './OnboardingStepWhereUniqueInputSchema';
import { OnboardingStepUpdateToOneWithWhereWithoutVolunteersInputSchema } from './OnboardingStepUpdateToOneWithWhereWithoutVolunteersInputSchema';
import { OnboardingStepUpdateWithoutVolunteersInputSchema } from './OnboardingStepUpdateWithoutVolunteersInputSchema';
import { OnboardingStepUncheckedUpdateWithoutVolunteersInputSchema } from './OnboardingStepUncheckedUpdateWithoutVolunteersInputSchema';

export const OnboardingStepUpdateOneRequiredWithoutVolunteersNestedInputSchema: z.ZodType<Prisma.OnboardingStepUpdateOneRequiredWithoutVolunteersNestedInput> = z.object({
  create: z.union([ z.lazy(() => OnboardingStepCreateWithoutVolunteersInputSchema),z.lazy(() => OnboardingStepUncheckedCreateWithoutVolunteersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => OnboardingStepCreateOrConnectWithoutVolunteersInputSchema).optional(),
  upsert: z.lazy(() => OnboardingStepUpsertWithoutVolunteersInputSchema).optional(),
  connect: z.lazy(() => OnboardingStepWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => OnboardingStepUpdateToOneWithWhereWithoutVolunteersInputSchema),z.lazy(() => OnboardingStepUpdateWithoutVolunteersInputSchema),z.lazy(() => OnboardingStepUncheckedUpdateWithoutVolunteersInputSchema) ]).optional(),
}).strict();

export default OnboardingStepUpdateOneRequiredWithoutVolunteersNestedInputSchema;
