import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CircleOrderByWithRelationInputSchema } from './CircleOrderByWithRelationInputSchema';
import { RoleOrderByWithRelationInputSchema } from './RoleOrderByWithRelationInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';
import { RoleTermOrderByRelationAggregateInputSchema } from './RoleTermOrderByRelationAggregateInputSchema';

export const CirclesToRolesOrderByWithRelationInputSchema: z.ZodType<Prisma.CirclesToRolesOrderByWithRelationInput> = z.object({
  circleId: z.lazy(() => SortOrderSchema).optional(),
  roleId: z.lazy(() => SortOrderSchema).optional(),
  incumbentId: z.lazy(() => SortOrderSchema).optional(),
  termIds: z.lazy(() => SortOrderSchema).optional(),
  circle: z.lazy(() => CircleOrderByWithRelationInputSchema).optional(),
  role: z.lazy(() => RoleOrderByWithRelationInputSchema).optional(),
  incumbent: z.lazy(() => PersonOrderByWithRelationInputSchema).optional(),
  terms: z.lazy(() => RoleTermOrderByRelationAggregateInputSchema).optional()
}).strict();

export default CirclesToRolesOrderByWithRelationInputSchema;
