import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { UuidNullableWithAggregatesFilterSchema } from './UuidNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const EthicVersionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EthicVersionScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EthicVersionScalarWhereWithAggregatesInputSchema),z.lazy(() => EthicVersionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EthicVersionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EthicVersionScalarWhereWithAggregatesInputSchema),z.lazy(() => EthicVersionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  text: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  ethicId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  submitterId: z.union([ z.lazy(() => UuidNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default EthicVersionScalarWhereWithAggregatesInputSchema;
