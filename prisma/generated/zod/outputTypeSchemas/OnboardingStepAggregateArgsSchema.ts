import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepWhereInputSchema } from '../inputTypeSchemas/OnboardingStepWhereInputSchema'
import { OnboardingStepOrderByWithRelationInputSchema } from '../inputTypeSchemas/OnboardingStepOrderByWithRelationInputSchema'
import { OnboardingStepWhereUniqueInputSchema } from '../inputTypeSchemas/OnboardingStepWhereUniqueInputSchema'

export const OnboardingStepAggregateArgsSchema: z.ZodType<Prisma.OnboardingStepAggregateArgs> = z.object({
  where: OnboardingStepWhereInputSchema.optional(),
  orderBy: z.union([ OnboardingStepOrderByWithRelationInputSchema.array(),OnboardingStepOrderByWithRelationInputSchema ]).optional(),
  cursor: OnboardingStepWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default OnboardingStepAggregateArgsSchema;
