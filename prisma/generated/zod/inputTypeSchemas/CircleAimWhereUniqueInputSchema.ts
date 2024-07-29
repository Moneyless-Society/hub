import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimWhereInputSchema } from './CircleAimWhereInputSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { CircleNullableRelationFilterSchema } from './CircleNullableRelationFilterSchema';
import { CircleWhereInputSchema } from './CircleWhereInputSchema';
import { CircleAimEditsListRelationFilterSchema } from './CircleAimEditsListRelationFilterSchema';

export const CircleAimWhereUniqueInputSchema: z.ZodType<Prisma.CircleAimWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => CircleAimWhereInputSchema),z.lazy(() => CircleAimWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CircleAimWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CircleAimWhereInputSchema),z.lazy(() => CircleAimWhereInputSchema).array() ]).optional(),
  circleId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  circle: z.union([ z.lazy(() => CircleNullableRelationFilterSchema),z.lazy(() => CircleWhereInputSchema) ]).optional().nullable(),
  edits: z.lazy(() => CircleAimEditsListRelationFilterSchema).optional()
}).strict());

export default CircleAimWhereUniqueInputSchema;
