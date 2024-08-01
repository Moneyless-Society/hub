import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { CircleNullableRelationFilterSchema } from './CircleNullableRelationFilterSchema';
import { CircleWhereInputSchema } from './CircleWhereInputSchema';
import { CircleAimEditsListRelationFilterSchema } from './CircleAimEditsListRelationFilterSchema';

export const CircleAimWhereInputSchema: z.ZodType<Prisma.CircleAimWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CircleAimWhereInputSchema),z.lazy(() => CircleAimWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CircleAimWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CircleAimWhereInputSchema),z.lazy(() => CircleAimWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  circleId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  circle: z.union([ z.lazy(() => CircleNullableRelationFilterSchema),z.lazy(() => CircleWhereInputSchema) ]).optional().nullable(),
  edits: z.lazy(() => CircleAimEditsListRelationFilterSchema).optional()
}).strict();

export default CircleAimWhereInputSchema;
