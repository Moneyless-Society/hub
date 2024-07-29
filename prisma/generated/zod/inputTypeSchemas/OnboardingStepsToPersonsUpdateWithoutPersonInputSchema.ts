import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { OnboardingStepUpdateOneRequiredWithoutVolunteersNestedInputSchema } from './OnboardingStepUpdateOneRequiredWithoutVolunteersNestedInputSchema';

export const OnboardingStepsToPersonsUpdateWithoutPersonInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsUpdateWithoutPersonInput> = z.object({
  complete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  doesOnboarding: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  step: z.lazy(() => OnboardingStepUpdateOneRequiredWithoutVolunteersNestedInputSchema).optional()
}).strict();

export default OnboardingStepsToPersonsUpdateWithoutPersonInputSchema;
