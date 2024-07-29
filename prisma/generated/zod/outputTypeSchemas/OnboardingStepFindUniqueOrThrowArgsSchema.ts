import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepIncludeSchema } from '../inputTypeSchemas/OnboardingStepIncludeSchema'
import { OnboardingStepWhereUniqueInputSchema } from '../inputTypeSchemas/OnboardingStepWhereUniqueInputSchema'
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

export const OnboardingStepFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OnboardingStepFindUniqueOrThrowArgs> = z.object({
  select: OnboardingStepSelectSchema.optional(),
  include: OnboardingStepIncludeSchema.optional(),
  where: OnboardingStepWhereUniqueInputSchema,
}).strict() ;

export default OnboardingStepFindUniqueOrThrowArgsSchema;
