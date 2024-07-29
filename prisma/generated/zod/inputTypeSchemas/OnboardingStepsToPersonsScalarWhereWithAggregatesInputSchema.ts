import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const OnboardingStepsToPersonsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OnboardingStepsToPersonsScalarWhereWithAggregatesInputSchema),z.lazy(() => OnboardingStepsToPersonsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OnboardingStepsToPersonsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OnboardingStepsToPersonsScalarWhereWithAggregatesInputSchema),z.lazy(() => OnboardingStepsToPersonsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  stepId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  personId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  complete: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  doesOnboarding: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export default OnboardingStepsToPersonsScalarWhereWithAggregatesInputSchema;
