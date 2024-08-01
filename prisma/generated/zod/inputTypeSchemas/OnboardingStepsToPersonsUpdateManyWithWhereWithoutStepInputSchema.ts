import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepsToPersonsScalarWhereInputSchema } from './OnboardingStepsToPersonsScalarWhereInputSchema';
import { OnboardingStepsToPersonsUpdateManyMutationInputSchema } from './OnboardingStepsToPersonsUpdateManyMutationInputSchema';
import { OnboardingStepsToPersonsUncheckedUpdateManyWithoutStepInputSchema } from './OnboardingStepsToPersonsUncheckedUpdateManyWithoutStepInputSchema';

export const OnboardingStepsToPersonsUpdateManyWithWhereWithoutStepInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsUpdateManyWithWhereWithoutStepInput> = z.object({
  where: z.lazy(() => OnboardingStepsToPersonsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OnboardingStepsToPersonsUpdateManyMutationInputSchema),z.lazy(() => OnboardingStepsToPersonsUncheckedUpdateManyWithoutStepInputSchema) ]),
}).strict();

export default OnboardingStepsToPersonsUpdateManyWithWhereWithoutStepInputSchema;
