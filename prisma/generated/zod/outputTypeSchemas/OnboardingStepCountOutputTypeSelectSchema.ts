import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const OnboardingStepCountOutputTypeSelectSchema: z.ZodType<Prisma.OnboardingStepCountOutputTypeSelect> = z.object({
  volunteers: z.boolean().optional(),
}).strict();

export default OnboardingStepCountOutputTypeSelectSchema;
