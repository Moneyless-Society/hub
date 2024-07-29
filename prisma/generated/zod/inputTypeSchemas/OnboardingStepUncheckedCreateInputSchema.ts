import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepsToPersonsUncheckedCreateNestedManyWithoutStepInputSchema } from './OnboardingStepsToPersonsUncheckedCreateNestedManyWithoutStepInputSchema';

export const OnboardingStepUncheckedCreateInputSchema: z.ZodType<Prisma.OnboardingStepUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  volunteers: z.lazy(() => OnboardingStepsToPersonsUncheckedCreateNestedManyWithoutStepInputSchema).optional()
}).strict();

export default OnboardingStepUncheckedCreateInputSchema;
