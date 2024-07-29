import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { OnboardingStepsToPersonsUncheckedUpdateManyWithoutStepNestedInputSchema } from './OnboardingStepsToPersonsUncheckedUpdateManyWithoutStepNestedInputSchema';

export const OnboardingStepUncheckedUpdateInputSchema: z.ZodType<Prisma.OnboardingStepUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  volunteers: z.lazy(() => OnboardingStepsToPersonsUncheckedUpdateManyWithoutStepNestedInputSchema).optional()
}).strict();

export default OnboardingStepUncheckedUpdateInputSchema;
