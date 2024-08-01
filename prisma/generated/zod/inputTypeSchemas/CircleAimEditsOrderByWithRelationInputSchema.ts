import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CircleAimOrderByWithRelationInputSchema } from './CircleAimOrderByWithRelationInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';

export const CircleAimEditsOrderByWithRelationInputSchema: z.ZodType<Prisma.CircleAimEditsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  circleAimId: z.lazy(() => SortOrderSchema).optional(),
  editorId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  circleAim: z.lazy(() => CircleAimOrderByWithRelationInputSchema).optional(),
  editor: z.lazy(() => PersonOrderByWithRelationInputSchema).optional()
}).strict();

export default CircleAimEditsOrderByWithRelationInputSchema;
