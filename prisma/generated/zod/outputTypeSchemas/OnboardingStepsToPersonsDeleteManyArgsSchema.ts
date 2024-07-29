import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepsToPersonsWhereInputSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsWhereInputSchema'

export const OnboardingStepsToPersonsDeleteManyArgsSchema: z.ZodType<Prisma.OnboardingStepsToPersonsDeleteManyArgs> = z.object({
  where: OnboardingStepsToPersonsWhereInputSchema.optional(),
}).strict() ;

export default OnboardingStepsToPersonsDeleteManyArgsSchema;
