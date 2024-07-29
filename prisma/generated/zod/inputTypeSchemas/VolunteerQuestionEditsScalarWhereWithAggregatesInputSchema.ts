import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const VolunteerQuestionEditsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => VolunteerQuestionEditsScalarWhereWithAggregatesInputSchema),z.lazy(() => VolunteerQuestionEditsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => VolunteerQuestionEditsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VolunteerQuestionEditsScalarWhereWithAggregatesInputSchema),z.lazy(() => VolunteerQuestionEditsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  questionId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  editorId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default VolunteerQuestionEditsScalarWhereWithAggregatesInputSchema;
