import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CircleAimOrderByRelationAggregateInputSchema } from './CircleAimOrderByRelationAggregateInputSchema';
import { CirclesToRolesOrderByRelationAggregateInputSchema } from './CirclesToRolesOrderByRelationAggregateInputSchema';

export const CircleOrderByWithRelationInputSchema: z.ZodType<Prisma.CircleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  mission: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  domains: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedBy: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  aims: z.lazy(() => CircleAimOrderByRelationAggregateInputSchema).optional(),
  roles: z.lazy(() => CirclesToRolesOrderByRelationAggregateInputSchema).optional()
}).strict();

export default CircleOrderByWithRelationInputSchema;
