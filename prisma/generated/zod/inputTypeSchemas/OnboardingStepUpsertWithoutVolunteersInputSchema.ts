import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepUpdateWithoutVolunteersInputSchema } from './OnboardingStepUpdateWithoutVolunteersInputSchema';
import { OnboardingStepUncheckedUpdateWithoutVolunteersInputSchema } from './OnboardingStepUncheckedUpdateWithoutVolunteersInputSchema';
import { OnboardingStepCreateWithoutVolunteersInputSchema } from './OnboardingStepCreateWithoutVolunteersInputSchema';
import { OnboardingStepUncheckedCreateWithoutVolunteersInputSchema } from './OnboardingStepUncheckedCreateWithoutVolunteersInputSchema';
import { OnboardingStepWhereInputSchema } from './OnboardingStepWhereInputSchema';

export const OnboardingStepUpsertWithoutVolunteersInputSchema: z.ZodType<Prisma.OnboardingStepUpsertWithoutVolunteersInput> = z.object({
  update: z.union([ z.lazy(() => OnboardingStepUpdateWithoutVolunteersInputSchema),z.lazy(() => OnboardingStepUncheckedUpdateWithoutVolunteersInputSchema) ]),
  create: z.union([ z.lazy(() => OnboardingStepCreateWithoutVolunteersInputSchema),z.lazy(() => OnboardingStepUncheckedCreateWithoutVolunteersInputSchema) ]),
  where: z.lazy(() => OnboardingStepWhereInputSchema).optional()
}).strict();

export default OnboardingStepUpsertWithoutVolunteersInputSchema;
