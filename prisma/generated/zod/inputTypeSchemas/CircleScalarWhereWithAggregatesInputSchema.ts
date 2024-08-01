import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const CircleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CircleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CircleScalarWhereWithAggregatesInputSchema),z.lazy(() => CircleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CircleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CircleScalarWhereWithAggregatesInputSchema),z.lazy(() => CircleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  mission: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  domains: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedBy: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export default CircleScalarWhereWithAggregatesInputSchema;
