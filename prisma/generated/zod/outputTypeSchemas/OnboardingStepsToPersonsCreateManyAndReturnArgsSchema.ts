import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepsToPersonsCreateManyInputSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsCreateManyInputSchema'

export const OnboardingStepsToPersonsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.OnboardingStepsToPersonsCreateManyAndReturnArgs> = z.object({
  data: z.union([ OnboardingStepsToPersonsCreateManyInputSchema,OnboardingStepsToPersonsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default OnboardingStepsToPersonsCreateManyAndReturnArgsSchema;
