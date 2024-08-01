import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EthicVersionCountOrderByAggregateInputSchema } from './EthicVersionCountOrderByAggregateInputSchema';
import { EthicVersionAvgOrderByAggregateInputSchema } from './EthicVersionAvgOrderByAggregateInputSchema';
import { EthicVersionMaxOrderByAggregateInputSchema } from './EthicVersionMaxOrderByAggregateInputSchema';
import { EthicVersionMinOrderByAggregateInputSchema } from './EthicVersionMinOrderByAggregateInputSchema';
import { EthicVersionSumOrderByAggregateInputSchema } from './EthicVersionSumOrderByAggregateInputSchema';

export const EthicVersionOrderByWithAggregationInputSchema: z.ZodType<Prisma.EthicVersionOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  text: z.lazy(() => SortOrderSchema).optional(),
  ethicId: z.lazy(() => SortOrderSchema).optional(),
  submitterId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EthicVersionCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EthicVersionAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EthicVersionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EthicVersionMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EthicVersionSumOrderByAggregateInputSchema).optional()
}).strict();

export default EthicVersionOrderByWithAggregationInputSchema;
