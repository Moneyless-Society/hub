import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const EthicVersionsToPersonsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EthicVersionsToPersonsScalarWhereWithAggregatesInputSchema),z.lazy(() => EthicVersionsToPersonsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EthicVersionsToPersonsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EthicVersionsToPersonsScalarWhereWithAggregatesInputSchema),z.lazy(() => EthicVersionsToPersonsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  ethicVersionId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  personId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  consent: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  commentary: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default EthicVersionsToPersonsScalarWhereWithAggregatesInputSchema;
