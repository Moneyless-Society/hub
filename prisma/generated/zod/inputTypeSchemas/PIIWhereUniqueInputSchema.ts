import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PIIWhereInputSchema } from './PIIWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PIIWhereUniqueInputSchema: z.ZodType<Prisma.PIIWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    personId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    personId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  personId: z.string().optional(),
  AND: z.union([ z.lazy(() => PIIWhereInputSchema),z.lazy(() => PIIWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PIIWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PIIWhereInputSchema),z.lazy(() => PIIWhereInputSchema).array() ]).optional(),
  legalFirstName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  legalLastName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  phoneNumber: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  discord: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
}).strict());

export default PIIWhereUniqueInputSchema;
