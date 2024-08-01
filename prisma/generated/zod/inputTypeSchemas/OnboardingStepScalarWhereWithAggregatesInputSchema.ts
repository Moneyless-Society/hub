import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const OnboardingStepScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OnboardingStepScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OnboardingStepScalarWhereWithAggregatesInputSchema),z.lazy(() => OnboardingStepScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OnboardingStepScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OnboardingStepScalarWhereWithAggregatesInputSchema),z.lazy(() => OnboardingStepScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default OnboardingStepScalarWhereWithAggregatesInputSchema;
