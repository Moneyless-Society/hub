import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const OnboardingStepCreateManyInputSchema: z.ZodType<Prisma.OnboardingStepCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  description: z.string().optional().nullable()
}).strict();

export default OnboardingStepCreateManyInputSchema;
