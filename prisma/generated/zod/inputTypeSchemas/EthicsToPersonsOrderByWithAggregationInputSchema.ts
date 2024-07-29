import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { EthicsToPersonsCountOrderByAggregateInputSchema } from './EthicsToPersonsCountOrderByAggregateInputSchema';
import { EthicsToPersonsAvgOrderByAggregateInputSchema } from './EthicsToPersonsAvgOrderByAggregateInputSchema';
import { EthicsToPersonsMaxOrderByAggregateInputSchema } from './EthicsToPersonsMaxOrderByAggregateInputSchema';
import { EthicsToPersonsMinOrderByAggregateInputSchema } from './EthicsToPersonsMinOrderByAggregateInputSchema';
import { EthicsToPersonsSumOrderByAggregateInputSchema } from './EthicsToPersonsSumOrderByAggregateInputSchema';

export const EthicsToPersonsOrderByWithAggregationInputSchema: z.ZodType<Prisma.EthicsToPersonsOrderByWithAggregationInput> = z.object({
  ethicId: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  ranking: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EthicsToPersonsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EthicsToPersonsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EthicsToPersonsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EthicsToPersonsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EthicsToPersonsSumOrderByAggregateInputSchema).optional()
}).strict();

export default EthicsToPersonsOrderByWithAggregationInputSchema;
