import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepsToPersonsWhereInputSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsWhereInputSchema'
import { OnboardingStepsToPersonsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsOrderByWithAggregationInputSchema'
import { OnboardingStepsToPersonsScalarFieldEnumSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsScalarFieldEnumSchema'
import { OnboardingStepsToPersonsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsScalarWhereWithAggregatesInputSchema'

export const OnboardingStepsToPersonsGroupByArgsSchema: z.ZodType<Prisma.OnboardingStepsToPersonsGroupByArgs> = z.object({
  where: OnboardingStepsToPersonsWhereInputSchema.optional(),
  orderBy: z.union([ OnboardingStepsToPersonsOrderByWithAggregationInputSchema.array(),OnboardingStepsToPersonsOrderByWithAggregationInputSchema ]).optional(),
  by: OnboardingStepsToPersonsScalarFieldEnumSchema.array(),
  having: OnboardingStepsToPersonsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default OnboardingStepsToPersonsGroupByArgsSchema;
