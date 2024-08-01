import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepsToPersonsIncludeSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsIncludeSchema'
import { OnboardingStepsToPersonsCreateInputSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsCreateInputSchema'
import { OnboardingStepsToPersonsUncheckedCreateInputSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsUncheckedCreateInputSchema'
import { OnboardingStepArgsSchema } from "../outputTypeSchemas/OnboardingStepArgsSchema"
import { PersonArgsSchema } from "../outputTypeSchemas/PersonArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OnboardingStepsToPersonsSelectSchema: z.ZodType<Prisma.OnboardingStepsToPersonsSelect> = z.object({
  stepId: z.boolean().optional(),
  personId: z.boolean().optional(),
  complete: z.boolean().optional(),
  doesOnboarding: z.boolean().optional(),
  step: z.union([z.boolean(),z.lazy(() => OnboardingStepArgsSchema)]).optional(),
  person: z.union([z.boolean(),z.lazy(() => PersonArgsSchema)]).optional(),
}).strict()

export const OnboardingStepsToPersonsCreateArgsSchema: z.ZodType<Prisma.OnboardingStepsToPersonsCreateArgs> = z.object({
  select: OnboardingStepsToPersonsSelectSchema.optional(),
  include: OnboardingStepsToPersonsIncludeSchema.optional(),
  data: z.union([ OnboardingStepsToPersonsCreateInputSchema,OnboardingStepsToPersonsUncheckedCreateInputSchema ]),
}).strict() ;

export default OnboardingStepsToPersonsCreateArgsSchema;
