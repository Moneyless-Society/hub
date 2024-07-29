import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepsToPersonsWhereInputSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsWhereInputSchema'
import { OnboardingStepsToPersonsOrderByWithRelationInputSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsOrderByWithRelationInputSchema'
import { OnboardingStepsToPersonsWhereUniqueInputSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsWhereUniqueInputSchema'

export const OnboardingStepsToPersonsAggregateArgsSchema: z.ZodType<Prisma.OnboardingStepsToPersonsAggregateArgs> = z.object({
  where: OnboardingStepsToPersonsWhereInputSchema.optional(),
  orderBy: z.union([ OnboardingStepsToPersonsOrderByWithRelationInputSchema.array(),OnboardingStepsToPersonsOrderByWithRelationInputSchema ]).optional(),
  cursor: OnboardingStepsToPersonsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default OnboardingStepsToPersonsAggregateArgsSchema;
