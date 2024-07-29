import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';

export const OnboardingStepsToPersonsUpdateManyMutationInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsUpdateManyMutationInput> = z.object({
  complete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  doesOnboarding: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default OnboardingStepsToPersonsUpdateManyMutationInputSchema;
