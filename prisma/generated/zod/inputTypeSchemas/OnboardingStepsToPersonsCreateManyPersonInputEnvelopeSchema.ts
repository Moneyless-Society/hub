import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepsToPersonsCreateManyPersonInputSchema } from './OnboardingStepsToPersonsCreateManyPersonInputSchema';

export const OnboardingStepsToPersonsCreateManyPersonInputEnvelopeSchema: z.ZodType<Prisma.OnboardingStepsToPersonsCreateManyPersonInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OnboardingStepsToPersonsCreateManyPersonInputSchema),z.lazy(() => OnboardingStepsToPersonsCreateManyPersonInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default OnboardingStepsToPersonsCreateManyPersonInputEnvelopeSchema;
