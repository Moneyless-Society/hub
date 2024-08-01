import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const VolunteerQuestionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VolunteerQuestionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VolunteerQuestionScalarWhereWithAggregatesInputSchema),z.lazy(() => VolunteerQuestionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VolunteerQuestionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VolunteerQuestionScalarWhereWithAggregatesInputSchema),z.lazy(() => VolunteerQuestionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  text: z.lazy(() => StringNullableListFilterSchema).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default VolunteerQuestionScalarWhereWithAggregatesInputSchema;
