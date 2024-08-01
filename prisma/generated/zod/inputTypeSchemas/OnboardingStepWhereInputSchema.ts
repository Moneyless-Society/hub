import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { OnboardingStepsToPersonsListRelationFilterSchema } from './OnboardingStepsToPersonsListRelationFilterSchema';

export const OnboardingStepWhereInputSchema: z.ZodType<Prisma.OnboardingStepWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OnboardingStepWhereInputSchema),z.lazy(() => OnboardingStepWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OnboardingStepWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OnboardingStepWhereInputSchema),z.lazy(() => OnboardingStepWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  volunteers: z.lazy(() => OnboardingStepsToPersonsListRelationFilterSchema).optional()
}).strict();

export default OnboardingStepWhereInputSchema;
