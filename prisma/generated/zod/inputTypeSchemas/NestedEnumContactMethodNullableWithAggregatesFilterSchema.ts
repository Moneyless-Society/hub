import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContactMethodSchema } from './ContactMethodSchema';
import { NestedIntNullableFilterSchema } from './NestedIntNullableFilterSchema';
import { NestedEnumContactMethodNullableFilterSchema } from './NestedEnumContactMethodNullableFilterSchema';

export const NestedEnumContactMethodNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumContactMethodNullableWithAggregatesFilter> = z.object({
  equals: z.lazy(() => ContactMethodSchema).optional().nullable(),
  in: z.lazy(() => ContactMethodSchema).array().optional().nullable(),
  notIn: z.lazy(() => ContactMethodSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => ContactMethodSchema),z.lazy(() => NestedEnumContactMethodNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumContactMethodNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumContactMethodNullableFilterSchema).optional()
}).strict();

export default NestedEnumContactMethodNullableWithAggregatesFilterSchema;
