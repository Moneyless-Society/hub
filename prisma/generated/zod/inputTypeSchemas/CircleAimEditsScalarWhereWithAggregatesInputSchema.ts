import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';

export const CircleAimEditsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CircleAimEditsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CircleAimEditsScalarWhereWithAggregatesInputSchema),z.lazy(() => CircleAimEditsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CircleAimEditsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CircleAimEditsScalarWhereWithAggregatesInputSchema),z.lazy(() => CircleAimEditsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  circleAimId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  editorId: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default CircleAimEditsScalarWhereWithAggregatesInputSchema;
