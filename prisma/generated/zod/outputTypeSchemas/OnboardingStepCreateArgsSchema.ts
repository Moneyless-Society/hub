import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepIncludeSchema } from '../inputTypeSchemas/OnboardingStepIncludeSchema'
import { OnboardingStepCreateInputSchema } from '../inputTypeSchemas/OnboardingStepCreateInputSchema'
import { OnboardingStepUncheckedCreateInputSchema } from '../inputTypeSchemas/OnboardingStepUncheckedCreateInputSchema'
import { OnboardingStepsToPersonsFindManyArgsSchema } from "../outputTypeSchemas/OnboardingStepsToPersonsFindManyArgsSchema"
import { OnboardingStepCountOutputTypeArgsSchema } from "../outputTypeSchemas/OnboardingStepCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OnboardingStepSelectSchema: z.ZodType<Prisma.OnboardingStepSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  volunteers: z.union([z.boolean(),z.lazy(() => OnboardingStepsToPersonsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => OnboardingStepCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const OnboardingStepCreateArgsSchema: z.ZodType<Prisma.OnboardingStepCreateArgs> = z.object({
  select: OnboardingStepSelectSchema.optional(),
  include: OnboardingStepIncludeSchema.optional(),
  data: z.union([ OnboardingStepCreateInputSchema,OnboardingStepUncheckedCreateInputSchema ]),
}).strict() ;

export default OnboardingStepCreateArgsSchema;
