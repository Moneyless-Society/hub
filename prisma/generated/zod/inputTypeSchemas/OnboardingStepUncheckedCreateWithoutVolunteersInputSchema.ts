import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OnboardingStepUncheckedCreateWithoutVolunteersInputSchema: z.ZodType<Prisma.OnboardingStepUncheckedCreateWithoutVolunteersInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();

export default OnboardingStepUncheckedCreateWithoutVolunteersInputSchema;
