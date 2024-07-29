import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';

export const EthicScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EthicScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EthicScalarWhereWithAggregatesInputSchema),z.lazy(() => EthicScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EthicScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EthicScalarWhereWithAggregatesInputSchema),z.lazy(() => EthicScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  shortName: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  activeId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  coreValue: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
}).strict();

export default EthicScalarWhereWithAggregatesInputSchema;
