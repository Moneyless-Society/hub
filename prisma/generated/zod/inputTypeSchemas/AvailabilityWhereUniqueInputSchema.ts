import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AvailabilityWhereInputSchema } from './AvailabilityWhereInputSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const AvailabilityWhereUniqueInputSchema: z.ZodType<Prisma.AvailabilityWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => AvailabilityWhereInputSchema),z.lazy(() => AvailabilityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AvailabilityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AvailabilityWhereInputSchema),z.lazy(() => AvailabilityWhereInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  start: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  end: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  startDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  endDate: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  status: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
}).strict());

export default AvailabilityWhereUniqueInputSchema;
