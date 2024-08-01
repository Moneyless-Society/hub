import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const AvailabilityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AvailabilityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AvailabilityScalarWhereWithAggregatesInputSchema),z.lazy(() => AvailabilityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AvailabilityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AvailabilityScalarWhereWithAggregatesInputSchema),z.lazy(() => AvailabilityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  personId: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  start: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  end: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  endDate: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default AvailabilityScalarWhereWithAggregatesInputSchema;
