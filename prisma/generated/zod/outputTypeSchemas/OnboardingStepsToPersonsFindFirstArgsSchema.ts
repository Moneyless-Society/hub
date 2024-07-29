import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepsToPersonsIncludeSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsIncludeSchema'
import { OnboardingStepsToPersonsWhereInputSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsWhereInputSchema'
import { OnboardingStepsToPersonsOrderByWithRelationInputSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsOrderByWithRelationInputSchema'
import { OnboardingStepsToPersonsWhereUniqueInputSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsWhereUniqueInputSchema'
import { OnboardingStepsToPersonsScalarFieldEnumSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsScalarFieldEnumSchema'
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

export const OnboardingStepsToPersonsFindFirstArgsSchema: z.ZodType<Prisma.OnboardingStepsToPersonsFindFirstArgs> = z.object({
  select: OnboardingStepsToPersonsSelectSchema.optional(),
  include: OnboardingStepsToPersonsIncludeSchema.optional(),
  where: OnboardingStepsToPersonsWhereInputSchema.optional(),
  orderBy: z.union([ OnboardingStepsToPersonsOrderByWithRelationInputSchema.array(),OnboardingStepsToPersonsOrderByWithRelationInputSchema ]).optional(),
  cursor: OnboardingStepsToPersonsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OnboardingStepsToPersonsScalarFieldEnumSchema,OnboardingStepsToPersonsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default OnboardingStepsToPersonsFindFirstArgsSchema;
