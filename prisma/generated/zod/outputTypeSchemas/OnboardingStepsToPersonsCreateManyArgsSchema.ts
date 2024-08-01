import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepsToPersonsCreateManyInputSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsCreateManyInputSchema'

export const OnboardingStepsToPersonsCreateManyArgsSchema: z.ZodType<Prisma.OnboardingStepsToPersonsCreateManyArgs> = z.object({
  data: z.union([ OnboardingStepsToPersonsCreateManyInputSchema,OnboardingStepsToPersonsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default OnboardingStepsToPersonsCreateManyArgsSchema;
