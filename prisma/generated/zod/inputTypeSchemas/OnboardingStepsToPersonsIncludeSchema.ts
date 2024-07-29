import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepArgsSchema } from "../outputTypeSchemas/OnboardingStepArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"

export const OnboardingStepsToPersonsIncludeSchema: z.ZodType<Prisma.OnboardingStepsToPersonsInclude> = z.object({
  step: z.union([z.boolean(),z.lazy(() => OnboardingStepArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export default OnboardingStepsToPersonsIncludeSchema;
