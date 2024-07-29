import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleWhereInputSchema } from './CircleWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { CircleAimListRelationFilterSchema } from './CircleAimListRelationFilterSchema';
import { CirclesToRolesListRelationFilterSchema } from './CirclesToRolesListRelationFilterSchema';

export const CircleWhereUniqueInputSchema: z.ZodType<Prisma.CircleWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    name: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => CircleWhereInputSchema),z.lazy(() => CircleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CircleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CircleWhereInputSchema),z.lazy(() => CircleWhereInputSchema).array() ]).optional(),
  mission: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  domains: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedBy: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  aims: z.lazy(() => CircleAimListRelationFilterSchema).optional(),
  roles: z.lazy(() => CirclesToRolesListRelationFilterSchema).optional()
}).strict());

export default CircleWhereUniqueInputSchema;
