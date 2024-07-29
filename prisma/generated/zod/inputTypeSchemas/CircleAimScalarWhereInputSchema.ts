import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';

export const CircleAimScalarWhereInputSchema: z.ZodType<Prisma.CircleAimScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CircleAimScalarWhereInputSchema),z.lazy(() => CircleAimScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CircleAimScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CircleAimScalarWhereInputSchema),z.lazy(() => CircleAimScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  circleId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
}).strict();

export default CircleAimScalarWhereInputSchema;
