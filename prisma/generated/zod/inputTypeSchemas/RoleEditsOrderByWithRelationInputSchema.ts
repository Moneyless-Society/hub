import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RoleOrderByWithRelationInputSchema } from './RoleOrderByWithRelationInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';

export const RoleEditsOrderByWithRelationInputSchema: z.ZodType<Prisma.RoleEditsOrderByWithRelationInput> = z.object({
  roleId: z.lazy(() => SortOrderSchema).optional(),
  editorId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  role: z.lazy(() => RoleOrderByWithRelationInputSchema).optional(),
  editor: z.lazy(() => PersonOrderByWithRelationInputSchema).optional()
}).strict();

export default RoleEditsOrderByWithRelationInputSchema;
