import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepsToPersonsScalarWhereInputSchema } from './OnboardingStepsToPersonsScalarWhereInputSchema';
import { OnboardingStepsToPersonsUpdateManyMutationInputSchema } from './OnboardingStepsToPersonsUpdateManyMutationInputSchema';
import { OnboardingStepsToPersonsUncheckedUpdateManyWithoutPersonInputSchema } from './OnboardingStepsToPersonsUncheckedUpdateManyWithoutPersonInputSchema';

export const OnboardingStepsToPersonsUpdateManyWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsUpdateManyWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => OnboardingStepsToPersonsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OnboardingStepsToPersonsUpdateManyMutationInputSchema),z.lazy(() => OnboardingStepsToPersonsUncheckedUpdateManyWithoutPersonInputSchema) ]),
}).strict();

export default OnboardingStepsToPersonsUpdateManyWithWhereWithoutPersonInputSchema;
