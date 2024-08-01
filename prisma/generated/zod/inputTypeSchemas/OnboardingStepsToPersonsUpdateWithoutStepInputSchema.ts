import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { PersonUpdateOneRequiredWithoutOnboardingNestedInputSchema } from './PersonUpdateOneRequiredWithoutOnboardingNestedInputSchema';

export const OnboardingStepsToPersonsUpdateWithoutStepInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsUpdateWithoutStepInput> = z.object({
  complete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  doesOnboarding: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  person: z.lazy(() => PersonUpdateOneRequiredWithoutOnboardingNestedInputSchema).optional()
}).strict();

export default OnboardingStepsToPersonsUpdateWithoutStepInputSchema;
