import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { IntNullableWithAggregatesFilterSchema } from './IntNullableWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const CircleAimScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CircleAimScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CircleAimScalarWhereWithAggregatesInputSchema),z.lazy(() => CircleAimScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CircleAimScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CircleAimScalarWhereWithAggregatesInputSchema),z.lazy(() => CircleAimScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  circleId: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  text: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export default CircleAimScalarWhereWithAggregatesInputSchema;
