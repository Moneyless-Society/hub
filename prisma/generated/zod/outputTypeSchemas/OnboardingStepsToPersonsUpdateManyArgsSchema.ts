import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepsToPersonsUpdateManyMutationInputSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsUpdateManyMutationInputSchema'
import { OnboardingStepsToPersonsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsUncheckedUpdateManyInputSchema'
import { OnboardingStepsToPersonsWhereInputSchema } from '../inputTypeSchemas/OnboardingStepsToPersonsWhereInputSchema'

export const OnboardingStepsToPersonsUpdateManyArgsSchema: z.ZodType<Prisma.OnboardingStepsToPersonsUpdateManyArgs> = z.object({
  data: z.union([ OnboardingStepsToPersonsUpdateManyMutationInputSchema,OnboardingStepsToPersonsUncheckedUpdateManyInputSchema ]),
  where: OnboardingStepsToPersonsWhereInputSchema.optional(),
}).strict() ;

export default OnboardingStepsToPersonsUpdateManyArgsSchema;
