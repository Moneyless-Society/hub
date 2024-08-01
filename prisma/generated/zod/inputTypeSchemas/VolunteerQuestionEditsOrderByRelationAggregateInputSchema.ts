import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VolunteerQuestionEditsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default VolunteerQuestionEditsOrderByRelationAggregateInputSchema;
