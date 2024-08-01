import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OnboardingStepsToPersonsStepIdPersonIdCompoundUniqueInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsStepIdPersonIdCompoundUniqueInput> = z.object({
  stepId: z.number(),
  personId: z.string()
}).strict();

export default OnboardingStepsToPersonsStepIdPersonIdCompoundUniqueInputSchema;
