import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const RoleTermScalarWhereInputSchema: z.ZodType<Prisma.RoleTermScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoleTermScalarWhereInputSchema),z.lazy(() => RoleTermScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleTermScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleTermScalarWhereInputSchema),z.lazy(() => RoleTermScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  circleId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  roleId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  holderId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  start: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  end: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default RoleTermScalarWhereInputSchema;
