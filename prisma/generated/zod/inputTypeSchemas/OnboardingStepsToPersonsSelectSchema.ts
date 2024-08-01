import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepArgsSchema } from "../outputTypeSchemas/OnboardingStepArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"

export const OnboardingStepsToPersonsSelectSchema: z.ZodType<Prisma.OnboardingStepsToPersonsSelect> = z.object({
  stepId: z.boolean().optional(),
  personId: z.boolean().optional(),
  complete: z.boolean().optional(),
  doesOnboarding: z.boolean().optional(),
  step: z.union([z.boolean(),z.lazy(() => OnboardingStepArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export default OnboardingStepsToPersonsSelectSchema;
