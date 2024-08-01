import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepsToPersonsFindManyArgsSchema } from "../outputTypeSchemas/OnboardingStepsToPersonsFindManyArgsSchema"
import { OnboardingStepCountOutputTypeArgsSchema } from "../outputTypeSchemas/OnboardingStepCountOutputTypeArgsSchema"

export const OnboardingStepIncludeSchema: z.ZodType<Prisma.OnboardingStepInclude> = z.object({
  volunteers: z.union([z.boolean(),z.lazy(() => OnboardingStepsToPersonsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OnboardingStepCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default OnboardingStepIncludeSchema;
