import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepWhereInputSchema } from './OnboardingStepWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { OnboardingStepsToPersonsListRelationFilterSchema } from './OnboardingStepsToPersonsListRelationFilterSchema';

export const OnboardingStepWhereUniqueInputSchema: z.ZodType<Prisma.OnboardingStepWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => OnboardingStepWhereInputSchema),z.lazy(() => OnboardingStepWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OnboardingStepWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OnboardingStepWhereInputSchema),z.lazy(() => OnboardingStepWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  volunteers: z.lazy(() => OnboardingStepsToPersonsListRelationFilterSchema).optional()
}).strict());

export default OnboardingStepWhereUniqueInputSchema;
