import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { OnboardingStepsToPersonsUpdateManyWithoutStepNestedInputSchema } from './OnboardingStepsToPersonsUpdateManyWithoutStepNestedInputSchema';

export const OnboardingStepUpdateInputSchema: z.ZodType<Prisma.OnboardingStepUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  volunteers: z.lazy(() => OnboardingStepsToPersonsUpdateManyWithoutStepNestedInputSchema).optional()
}).strict();

export default OnboardingStepUpdateInputSchema;
