import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const VolunteerResponseOrderByRelationAggregateInputSchema: z.ZodType<Prisma.VolunteerResponseOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default VolunteerResponseOrderByRelationAggregateInputSchema;
