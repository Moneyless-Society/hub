import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepSelectSchema } from '../inputTypeSchemas/OnboardingStepSelectSchema';
import { OnboardingStepIncludeSchema } from '../inputTypeSchemas/OnboardingStepIncludeSchema';

export const OnboardingStepArgsSchema: z.ZodType<Prisma.OnboardingStepDefaultArgs> = z.object({
  select: z.lazy(() => OnboardingStepSelectSchema).optional(),
  include: z.lazy(() => OnboardingStepIncludeSchema).optional(),
}).strict();

export default OnboardingStepArgsSchema;
