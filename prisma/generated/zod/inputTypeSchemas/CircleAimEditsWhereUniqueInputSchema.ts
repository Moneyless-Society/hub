import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsWhereInputSchema } from './CircleAimEditsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { CircleAimRelationFilterSchema } from './CircleAimRelationFilterSchema';
import { CircleAimWhereInputSchema } from './CircleAimWhereInputSchema';
import { PersonNullableRelationFilterSchema } from './PersonNullableRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const CircleAimEditsWhereUniqueInputSchema: z.ZodType<Prisma.CircleAimEditsWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => CircleAimEditsWhereInputSchema),z.lazy(() => CircleAimEditsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CircleAimEditsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CircleAimEditsWhereInputSchema),z.lazy(() => CircleAimEditsWhereInputSchema).array() ]).optional(),
  circleAimId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  editorId: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  circleAim: z.union([ z.lazy(() => CircleAimRelationFilterSchema),z.lazy(() => CircleAimWhereInputSchema) ]).optional(),
  editor: z.union([ z.lazy(() => PersonNullableRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional().nullable(),
}).strict());

export default CircleAimEditsWhereUniqueInputSchema;
