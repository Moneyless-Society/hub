import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const RoleEditsCountOrderByAggregateInputSchema: z.ZodType<Prisma.RoleEditsCountOrderByAggregateInput> = z.object({
  roleId: z.lazy(() => SortOrderSchema).optional(),
  editorId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default RoleEditsCountOrderByAggregateInputSchema;
