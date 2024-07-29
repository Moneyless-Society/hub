import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepWhereInputSchema } from './OnboardingStepWhereInputSchema';
import { OnboardingStepUpdateWithoutVolunteersInputSchema } from './OnboardingStepUpdateWithoutVolunteersInputSchema';
import { OnboardingStepUncheckedUpdateWithoutVolunteersInputSchema } from './OnboardingStepUncheckedUpdateWithoutVolunteersInputSchema';

export const OnboardingStepUpdateToOneWithWhereWithoutVolunteersInputSchema: z.ZodType<Prisma.OnboardingStepUpdateToOneWithWhereWithoutVolunteersInput> = z.object({
  where: z.lazy(() => OnboardingStepWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => OnboardingStepUpdateWithoutVolunteersInputSchema),z.lazy(() => OnboardingStepUncheckedUpdateWithoutVolunteersInputSchema) ]),
}).strict();

export default OnboardingStepUpdateToOneWithWhereWithoutVolunteersInputSchema;
