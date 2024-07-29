import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RoleEditsOrderByRelationAggregateInputSchema } from './RoleEditsOrderByRelationAggregateInputSchema';
import { CirclesToRolesOrderByRelationAggregateInputSchema } from './CirclesToRolesOrderByRelationAggregateInputSchema';

export const RoleOrderByWithRelationInputSchema: z.ZodType<Prisma.RoleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  edits: z.lazy(() => RoleEditsOrderByRelationAggregateInputSchema).optional(),
  circles: z.lazy(() => CirclesToRolesOrderByRelationAggregateInputSchema).optional()
}).strict();

export default RoleOrderByWithRelationInputSchema;
