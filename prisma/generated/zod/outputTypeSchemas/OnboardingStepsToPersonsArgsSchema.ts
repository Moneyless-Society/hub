import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepsToPersonsSelectSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsSelectSchema';
import { OnboardingStepsToPersonsIncludeSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsIncludeSchema';

export const OnboardingStepsToPersonsArgsSchema: z.ZodType<Prisma.OnboardingStepsToPersonsDefaultArgs> = z.object({
  select: z.lazy(() => OnboardingStepsToPersonsSelectSchema).optional(),
  include: z.lazy(() => OnboardingStepsToPersonsIncludeSchema).optional(),
}).strict();

export default OnboardingStepsToPersonsArgsSchema;
