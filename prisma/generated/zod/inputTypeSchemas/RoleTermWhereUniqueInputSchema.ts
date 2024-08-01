import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTermWhereInputSchema } from './RoleTermWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { CirclesToRolesRelationFilterSchema } from './CirclesToRolesRelationFilterSchema';
import { CirclesToRolesWhereInputSchema } from './CirclesToRolesWhereInputSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const RoleTermWhereUniqueInputSchema: z.ZodType<Prisma.RoleTermWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => RoleTermWhereInputSchema),z.lazy(() => RoleTermWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleTermWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleTermWhereInputSchema),z.lazy(() => RoleTermWhereInputSchema).array() ]).optional(),
  circleId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  roleId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  holderId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  start: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  end: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  circleRole: z.union([ z.lazy(() => CirclesToRolesRelationFilterSchema),z.lazy(() => CirclesToRolesWhereInputSchema) ]).optional(),
  holder: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
}).strict());

export default RoleTermWhereUniqueInputSchema;
