import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCircleIdRoleIdCompoundUniqueInputSchema } from './CirclesToRolesCircleIdRoleIdCompoundUniqueInputSchema';
import { CirclesToRolesWhereInputSchema } from './CirclesToRolesWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { IntNullableListFilterSchema } from './IntNullableListFilterSchema';
import { CircleRelationFilterSchema } from './CircleRelationFilterSchema';
import { CircleWhereInputSchema } from './CircleWhereInputSchema';
import { RoleRelationFilterSchema } from './RoleRelationFilterSchema';
import { RoleWhereInputSchema } from './RoleWhereInputSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { RoleTermListRelationFilterSchema } from './RoleTermListRelationFilterSchema';

export const CirclesToRolesWhereUniqueInputSchema: z.ZodType<Prisma.CirclesToRolesWhereUniqueInput> = z.object({
  circleId_roleId: z.lazy(() => CirclesToRolesCircleIdRoleIdCompoundUniqueInputSchema)
})
.and(z.object({
  circleId_roleId: z.lazy(() => CirclesToRolesCircleIdRoleIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => CirclesToRolesWhereInputSchema),z.lazy(() => CirclesToRolesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CirclesToRolesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CirclesToRolesWhereInputSchema),z.lazy(() => CirclesToRolesWhereInputSchema).array() ]).optional(),
  circleId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  roleId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  incumbentId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  termIds: z.lazy(() => IntNullableListFilterSchema).optional(),
  circle: z.union([ z.lazy(() => CircleRelationFilterSchema),z.lazy(() => CircleWhereInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RoleRelationFilterSchema),z.lazy(() => RoleWhereInputSchema) ]).optional(),
  incumbent: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  terms: z.lazy(() => RoleTermListRelationFilterSchema).optional()
}).strict());

export default CirclesToRolesWhereUniqueInputSchema;
