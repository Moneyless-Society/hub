import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OnboardingStepUpdateManyMutationInputSchema } from '../inputTypeSchemas/OnboardingStepUpdateManyMutationInputSchema'
import { OnboardingStepUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/OnboardingStepUncheckedUpdateManyInputSchema'
import { OnboardingStepWhereInputSchema } from '../inputTypeSchemas/OnboardingStepWhereInputSchema'

export const OnboardingStepUpdateManyArgsSchema: z.ZodType<Prisma.OnboardingStepUpdateManyArgs> = z.object({
  data: z.union([ OnboardingStepUpdateManyMutationInputSchema,OnboardingStepUncheckedUpdateManyInputSchema ]),
  where: OnboardingStepWhereInputSchema.optional(),
}).strict() ;

export default OnboardingStepUpdateManyArgsSchema;
