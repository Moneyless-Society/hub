import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';

export const CircleAimEditsScalarWhereInputSchema: z.ZodType<Prisma.CircleAimEditsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CircleAimEditsScalarWhereInputSchema),z.lazy(() => CircleAimEditsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CircleAimEditsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CircleAimEditsScalarWhereInputSchema),z.lazy(() => CircleAimEditsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  circleAimId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  editorId: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default CircleAimEditsScalarWhereInputSchema;
