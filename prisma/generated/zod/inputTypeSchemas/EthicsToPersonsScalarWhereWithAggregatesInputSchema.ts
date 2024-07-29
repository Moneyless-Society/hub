import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { IntNullableListFilterSchema } from './IntNullableListFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const EthicsToPersonsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EthicsToPersonsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EthicsToPersonsScalarWhereWithAggregatesInputSchema),z.lazy(() => EthicsToPersonsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EthicsToPersonsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EthicsToPersonsScalarWhereWithAggregatesInputSchema),z.lazy(() => EthicsToPersonsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  ethicId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  personId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  ranking: z.lazy(() => IntNullableListFilterSchema).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default EthicsToPersonsScalarWhereWithAggregatesInputSchema;
