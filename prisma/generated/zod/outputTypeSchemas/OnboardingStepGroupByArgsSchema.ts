import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepWhereInputSchema } from '../inputTypeSchemas/OnboardingStepWhereInputSchema'
import { OnboardingStepOrderByWithAggregationInputSchema } from '../inputTypeSchemas/OnboardingStepOrderByWithAggregationInputSchema'
import { OnboardingStepScalarFieldEnumSchema } from '../inputTypeSchemas/OnboardingStepScalarFieldEnumSchema'
import { OnboardingStepScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/OnboardingStepScalarWhereWithAggregatesInputSchema'

export const OnboardingStepGroupByArgsSchema: z.ZodType<Prisma.OnboardingStepGroupByArgs> = z.object({
  where: OnboardingStepWhereInputSchema.optional(),
  orderBy: z.union([ OnboardingStepOrderByWithAggregationInputSchema.array(),OnboardingStepOrderByWithAggregationInputSchema ]).optional(),
  by: OnboardingStepScalarFieldEnumSchema.array(),
  having: OnboardingStepScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default OnboardingStepGroupByArgsSchema;
