import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContactMethodSchema } from './ContactMethodSchema';
import { NestedEnumContactMethodNullableFilterSchema } from './NestedEnumContactMethodNullableFilterSchema';

export const EnumContactMethodNullableFilterSchema: z.ZodType<Prisma.EnumContactMethodNullableFilter> = z.object({
  equals: z.lazy(() => ContactMethodSchema).optional().nullable(),
  in: z.lazy(() => ContactMethodSchema).array().optional().nullable(),
  notIn: z.lazy(() => ContactMethodSchema).array().optional().nullable(),
  not: z.union([ z.lazy(() => ContactMethodSchema),z.lazy(() => NestedEnumContactMethodNullableFilterSchema) ]).optional().nullable(),
}).strict();

export default EnumContactMethodNullableFilterSchema;
