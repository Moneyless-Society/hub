import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';

export const OnboardingStepsToPersonsUncheckedUpdateWithoutPersonInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsUncheckedUpdateWithoutPersonInput> = z.object({
  stepId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  complete: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  doesOnboarding: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default OnboardingStepsToPersonsUncheckedUpdateWithoutPersonInputSchema;
