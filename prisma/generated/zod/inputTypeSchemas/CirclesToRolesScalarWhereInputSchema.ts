import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { IntNullableListFilterSchema } from './IntNullableListFilterSchema';

export const CirclesToRolesScalarWhereInputSchema: z.ZodType<Prisma.CirclesToRolesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CirclesToRolesScalarWhereInputSchema),z.lazy(() => CirclesToRolesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CirclesToRolesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CirclesToRolesScalarWhereInputSchema),z.lazy(() => CirclesToRolesScalarWhereInputSchema).array() ]).optional(),
  circleId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  roleId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  incumbentId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  termIds: z.lazy(() => IntNullableListFilterSchema).optional()
}).strict();

export default CirclesToRolesScalarWhereInputSchema;
