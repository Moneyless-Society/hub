import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { CircleAimRelationFilterSchema } from './CircleAimRelationFilterSchema';
import { CircleAimWhereInputSchema } from './CircleAimWhereInputSchema';
import { PersonNullableRelationFilterSchema } from './PersonNullableRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const CircleAimEditsWhereInputSchema: z.ZodType<Prisma.CircleAimEditsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CircleAimEditsWhereInputSchema),z.lazy(() => CircleAimEditsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CircleAimEditsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CircleAimEditsWhereInputSchema),z.lazy(() => CircleAimEditsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  circleAimId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  editorId: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  circleAim: z.union([ z.lazy(() => CircleAimRelationFilterSchema),z.lazy(() => CircleAimWhereInputSchema) ]).optional(),
  editor: z.union([ z.lazy(() => PersonNullableRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional().nullable(),
}).strict();

export default CircleAimEditsWhereInputSchema;
