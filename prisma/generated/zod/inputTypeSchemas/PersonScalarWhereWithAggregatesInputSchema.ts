import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { EnumContactMethodNullableWithAggregatesFilterSchema } from './EnumContactMethodNullableWithAggregatesFilterSchema';
import { ContactMethodSchema } from './ContactMethodSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const PersonScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PersonScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PersonScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  pronouns: z.lazy(() => StringNullableListFilterSchema).optional(),
  bio: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  preferredContactMethod: z.union([ z.lazy(() => EnumContactMethodNullableWithAggregatesFilterSchema),z.lazy(() => ContactMethodSchema) ]).optional().nullable(),
  volunteerQuestionId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default PersonScalarWhereWithAggregatesInputSchema;
