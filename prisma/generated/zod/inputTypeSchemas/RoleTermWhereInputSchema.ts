import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { CirclesToRolesRelationFilterSchema } from './CirclesToRolesRelationFilterSchema';
import { CirclesToRolesWhereInputSchema } from './CirclesToRolesWhereInputSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const RoleTermWhereInputSchema: z.ZodType<Prisma.RoleTermWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoleTermWhereInputSchema),z.lazy(() => RoleTermWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleTermWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleTermWhereInputSchema),z.lazy(() => RoleTermWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  circleId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  roleId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  holderId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  start: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  end: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  circleRole: z.union([ z.lazy(() => CirclesToRolesRelationFilterSchema),z.lazy(() => CirclesToRolesWhereInputSchema) ]).optional(),
  holder: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
}).strict();

export default RoleTermWhereInputSchema;
