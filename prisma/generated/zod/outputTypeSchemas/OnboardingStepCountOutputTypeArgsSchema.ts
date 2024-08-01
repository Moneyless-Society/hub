import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepCountOutputTypeSelectSchema } from './OnboardingStepCountOutputTypeSelectSchema';

export const OnboardingStepCountOutputTypeArgsSchema: z.ZodType<Prisma.OnboardingStepCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => OnboardingStepCountOutputTypeSelectSchema).nullish(),
}).strict();

export default OnboardingStepCountOutputTypeSelectSchema;
