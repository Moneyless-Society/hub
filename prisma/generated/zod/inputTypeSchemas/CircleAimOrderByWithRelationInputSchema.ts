import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CircleOrderByWithRelationInputSchema } from './CircleOrderByWithRelationInputSchema';
import { CircleAimEditsOrderByRelationAggregateInputSchema } from './CircleAimEditsOrderByRelationAggregateInputSchema';

export const CircleAimOrderByWithRelationInputSchema: z.ZodType<Prisma.CircleAimOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  circleId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  circle: z.lazy(() => CircleOrderByWithRelationInputSchema).optional(),
  edits: z.lazy(() => CircleAimEditsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default CircleAimOrderByWithRelationInputSchema;
