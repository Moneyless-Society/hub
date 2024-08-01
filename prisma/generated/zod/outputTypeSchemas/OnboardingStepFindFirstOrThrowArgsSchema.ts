import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepIncludeSchema } from '../inputTypeSchemas/OnboardingStepIncludeSchema'
import { OnboardingStepWhereInputSchema } from '../inputTypeSchemas/OnboardingStepWhereInputSchema'
import { OnboardingStepOrderByWithRelationInputSchema } from '../inputTypeSchemas/OnboardingStepOrderByWithRelationInputSchema'
import { OnboardingStepWhereUniqueInputSchema } from '../inputTypeSchemas/OnboardingStepWhereUniqueInputSchema'
import { OnboardingStepScalarFieldEnumSchema } from '../inputTypeSchemas/OnboardingStepScalarFieldEnumSchema'
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

export const OnboardingStepFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OnboardingStepFindFirstOrThrowArgs> = z.object({
  select: OnboardingStepSelectSchema.optional(),
  include: OnboardingStepIncludeSchema.optional(),
  where: OnboardingStepWhereInputSchema.optional(),
  orderBy: z.union([ OnboardingStepOrderByWithRelationInputSchema.array(),OnboardingStepOrderByWithRelationInputSchema ]).optional(),
  cursor: OnboardingStepWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OnboardingStepScalarFieldEnumSchema,OnboardingStepScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default OnboardingStepFindFirstOrThrowArgsSchema;
