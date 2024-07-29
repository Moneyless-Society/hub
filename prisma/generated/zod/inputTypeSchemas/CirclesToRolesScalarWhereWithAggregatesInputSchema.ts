import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { IntNullableListFilterSchema } from './IntNullableListFilterSchema';

export const CirclesToRolesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CirclesToRolesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CirclesToRolesScalarWhereWithAggregatesInputSchema),z.lazy(() => CirclesToRolesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CirclesToRolesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CirclesToRolesScalarWhereWithAggregatesInputSchema),z.lazy(() => CirclesToRolesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  circleId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  roleId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  incumbentId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  termIds: z.lazy(() => IntNullableListFilterSchema).optional()
}).strict();

export default CirclesToRolesScalarWhereWithAggregatesInputSchema;
