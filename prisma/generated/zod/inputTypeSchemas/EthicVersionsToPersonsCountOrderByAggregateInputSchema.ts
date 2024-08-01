import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EthicVersionsToPersonsCountOrderByAggregateInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsCountOrderByAggregateInput> = z.object({
  ethicVersionId: z.lazy(() => SortOrderSchema).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  consent: z.lazy(() => SortOrderSchema).optional(),
  commentary: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EthicVersionsToPersonsCountOrderByAggregateInputSchema;
