import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const AvailabilityScalarWhereInputSchema: z.ZodType<Prisma.AvailabilityScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AvailabilityScalarWhereInputSchema),z.lazy(() => AvailabilityScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AvailabilityScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AvailabilityScalarWhereInputSchema),z.lazy(() => AvailabilityScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  personId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  start: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  end: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  endDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default AvailabilityScalarWhereInputSchema;
