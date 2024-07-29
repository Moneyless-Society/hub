import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CirclesToRolesOrderByWithRelationInputSchema } from './CirclesToRolesOrderByWithRelationInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';

export const RoleTermOrderByWithRelationInputSchema: z.ZodType<Prisma.RoleTermOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  circleId: z.lazy(() => SortOrderSchema).optional(),
  roleId: z.lazy(() => SortOrderSchema).optional(),
  holderId: z.lazy(() => SortOrderSchema).optional(),
  start: z.lazy(() => SortOrderSchema).optional(),
  end: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  circleRole: z.lazy(() => CirclesToRolesOrderByWithRelationInputSchema).optional(),
  holder: z.lazy(() => PersonOrderByWithRelationInputSchema).optional()
}).strict();

export default RoleTermOrderByWithRelationInputSchema;
