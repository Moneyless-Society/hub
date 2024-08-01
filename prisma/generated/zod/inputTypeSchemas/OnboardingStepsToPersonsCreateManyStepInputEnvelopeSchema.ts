import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepsToPersonsCreateManyStepInputSchema } from './OnboardingStepsToPersonsCreateManyStepInputSchema';

export const OnboardingStepsToPersonsCreateManyStepInputEnvelopeSchema: z.ZodType<Prisma.OnboardingStepsToPersonsCreateManyStepInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OnboardingStepsToPersonsCreateManyStepInputSchema),z.lazy(() => OnboardingStepsToPersonsCreateManyStepInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default OnboardingStepsToPersonsCreateManyStepInputEnvelopeSchema;
