import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepsToPersonsFindManyArgsSchema } from "../outputTypeSchemas/OnboardingStepsToPersonsFindManyArgsSchema"
import { OnboardingStepCountOutputTypeArgsSchema } from "../outputTypeSchemas/OnboardingStepCountOutputTypeArgsSchema"

export const OnboardingStepSelectSchema: z.ZodType<Prisma.OnboardingStepSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  volunteers: z.union([z.boolean(),z.lazy(() => OnboardingStepsToPersonsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OnboardingStepCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default OnboardingStepSelectSchema;
