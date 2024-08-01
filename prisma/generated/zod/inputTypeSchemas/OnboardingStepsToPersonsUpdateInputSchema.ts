import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { OnboardingStepUpdateOneRequiredWithoutVolunteersNestedInputSchema } from './OnboardingStepUpdateOneRequiredWithoutVolunteersNestedInputSchema';
import { PersonUpdateOneRequiredWithoutOnboardingNestedInputSchema } from './PersonUpdateOneRequiredWithoutOnboardingNestedInputSchema';

export const OnboardingStepsToPersonsUpdateInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsUpdateInput> = z.object({
  complete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  doesOnboarding: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  step: z.lazy(() => OnboardingStepUpdateOneRequiredWithoutVolunteersNestedInputSchema).optional(),
  person: z.lazy(() => PersonUpdateOneRequiredWithoutOnboardingNestedInputSchema).optional()
}).strict();

export default OnboardingStepsToPersonsUpdateInputSchema;
