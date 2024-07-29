import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EthicCountOrderByAggregateInputSchema } from './EthicCountOrderByAggregateInputSchema';
import { EthicAvgOrderByAggregateInputSchema } from './EthicAvgOrderByAggregateInputSchema';
import { EthicMaxOrderByAggregateInputSchema } from './EthicMaxOrderByAggregateInputSchema';
import { EthicMinOrderByAggregateInputSchema } from './EthicMinOrderByAggregateInputSchema';
import { EthicSumOrderByAggregateInputSchema } from './EthicSumOrderByAggregateInputSchema';

export const EthicOrderByWithAggregationInputSchema: z.ZodType<Prisma.EthicOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  shortName: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  activeId: z.lazy(() => SortOrderSchema).optional(),
  coreValue: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EthicCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EthicAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EthicMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EthicMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EthicSumOrderByAggregateInputSchema).optional()
}).strict();

export default EthicOrderByWithAggregationInputSchema;
