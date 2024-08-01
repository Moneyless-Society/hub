import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { VolunteerQuestionEditsCountOrderByAggregateInputSchema } from './VolunteerQuestionEditsCountOrderByAggregateInputSchema';
import { VolunteerQuestionEditsAvgOrderByAggregateInputSchema } from './VolunteerQuestionEditsAvgOrderByAggregateInputSchema';
import { VolunteerQuestionEditsMaxOrderByAggregateInputSchema } from './VolunteerQuestionEditsMaxOrderByAggregateInputSchema';
import { VolunteerQuestionEditsMinOrderByAggregateInputSchema } from './VolunteerQuestionEditsMinOrderByAggregateInputSchema';
import { VolunteerQuestionEditsSumOrderByAggregateInputSchema } from './VolunteerQuestionEditsSumOrderByAggregateInputSchema';

export const VolunteerQuestionEditsOrderByWithAggregationInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsOrderByWithAggregationInput> = z.object({
  questionId: z.lazy(() => SortOrderSchema).optional(),
  editorId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => VolunteerQuestionEditsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => VolunteerQuestionEditsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => VolunteerQuestionEditsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => VolunteerQuestionEditsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => VolunteerQuestionEditsSumOrderByAggregateInputSchema).optional()
}).strict();

export default VolunteerQuestionEditsOrderByWithAggregationInputSchema;
