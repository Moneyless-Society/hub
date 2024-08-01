import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const OnboardingStepsToPersonsScalarWhereInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OnboardingStepsToPersonsScalarWhereInputSchema),z.lazy(() => OnboardingStepsToPersonsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OnboardingStepsToPersonsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OnboardingStepsToPersonsScalarWhereInputSchema),z.lazy(() => OnboardingStepsToPersonsScalarWhereInputSchema).array() ]).optional(),
  stepId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  personId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  complete: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  doesOnboarding: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict();

export default OnboardingStepsToPersonsScalarWhereInputSchema;
