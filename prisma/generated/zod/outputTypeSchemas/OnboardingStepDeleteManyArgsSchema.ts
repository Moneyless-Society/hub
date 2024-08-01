import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepWhereInputSchema } from '../inputTypeSchemas/OnboardingStepWhereInputSchema'

export const OnboardingStepDeleteManyArgsSchema: z.ZodType<Prisma.OnboardingStepDeleteManyArgs> = z.object({
  where: OnboardingStepWhereInputSchema.optional(),
}).strict() ;

export default OnboardingStepDeleteManyArgsSchema;
