import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const RoleEditsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RoleEditsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => RoleEditsScalarWhereWithAggregatesInputSchema),z.lazy(() => RoleEditsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleEditsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleEditsScalarWhereWithAggregatesInputSchema),z.lazy(() => RoleEditsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  roleId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  editorId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default RoleEditsScalarWhereWithAggregatesInputSchema;
