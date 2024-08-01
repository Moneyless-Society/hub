import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepCreateManyInputSchema } from '../inputTypeSchemas/OnboardingStepCreateManyInputSchema'

export const OnboardingStepCreateManyAndReturnArgsSchema: z.ZodType<Prisma.OnboardingStepCreateManyAndReturnArgs> = z.object({
  data: z.union([ OnboardingStepCreateManyInputSchema,OnboardingStepCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default OnboardingStepCreateManyAndReturnArgsSchema;
