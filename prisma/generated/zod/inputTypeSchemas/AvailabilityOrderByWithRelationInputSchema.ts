import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';

export const AvailabilityOrderByWithRelationInputSchema: z.ZodType<Prisma.AvailabilityOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.lazy(() => SortOrderSchema).optional(),
  startDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  endDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  person: z.lazy(() => PersonOrderByWithRelationInputSchema).optional()
}).strict();

export default AvailabilityOrderByWithRelationInputSchema;
