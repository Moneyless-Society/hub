import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { VolunteerResponseOrderByRelationAggregateInputSchema } from './VolunteerResponseOrderByRelationAggregateInputSchema';
import { VolunteerQuestionEditsOrderByRelationAggregateInputSchema } from './VolunteerQuestionEditsOrderByRelationAggregateInputSchema';

export const VolunteerQuestionOrderByWithRelationInputSchema: z.ZodType<Prisma.VolunteerQuestionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  responses: z.lazy(() => VolunteerResponseOrderByRelationAggregateInputSchema).optional(),
  edits: z.lazy(() => VolunteerQuestionEditsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default VolunteerQuestionOrderByWithRelationInputSchema;
