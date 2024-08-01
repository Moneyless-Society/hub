import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepCreateManyInputSchema } from '../inputTypeSchemas/OnboardingStepCreateManyInputSchema'

export const OnboardingStepCreateManyArgsSchema: z.ZodType<Prisma.OnboardingStepCreateManyArgs> = z.object({
  data: z.union([ OnboardingStepCreateManyInputSchema,OnboardingStepCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default OnboardingStepCreateManyArgsSchema;
