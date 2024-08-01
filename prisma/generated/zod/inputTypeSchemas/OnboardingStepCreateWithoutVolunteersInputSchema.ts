import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OnboardingStepCreateWithoutVolunteersInputSchema: z.ZodType<Prisma.OnboardingStepCreateWithoutVolunteersInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();

export default OnboardingStepCreateWithoutVolunteersInputSchema;
