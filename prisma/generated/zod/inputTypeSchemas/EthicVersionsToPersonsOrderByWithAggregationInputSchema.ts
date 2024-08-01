import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EthicVersionsToPersonsCountOrderByAggregateInputSchema } from './EthicVersionsToPersonsCountOrderByAggregateInputSchema';
import { EthicVersionsToPersonsAvgOrderByAggregateInputSchema } from './EthicVersionsToPersonsAvgOrderByAggregateInputSchema';
import { EthicVersionsToPersonsMaxOrderByAggregateInputSchema } from './EthicVersionsToPersonsMaxOrderByAggregateInputSchema';
import { EthicVersionsToPersonsMinOrderByAggregateInputSchema } from './EthicVersionsToPersonsMinOrderByAggregateInputSchema';
import { EthicVersionsToPersonsSumOrderByAggregateInputSchema } from './EthicVersionsToPersonsSumOrderByAggregateInputSchema';

export const EthicVersionsToPersonsOrderByWithAggregationInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsOrderByWithAggregationInput> = z.object({
  ethicVersionId: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  consent: z.lazy(() => SortOrderSchema).optional(),
  commentary: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => EthicVersionsToPersonsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EthicVersionsToPersonsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EthicVersionsToPersonsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EthicVersionsToPersonsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EthicVersionsToPersonsSumOrderByAggregateInputSchema).optional()
}).strict();

export default EthicVersionsToPersonsOrderByWithAggregationInputSchema;
