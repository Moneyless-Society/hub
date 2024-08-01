import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { PersonNullableRelationFilterSchema } from './PersonNullableRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { AccountListRelationFilterSchema } from './AccountListRelationFilterSchema';
import { SessionListRelationFilterSchema } from './SessionListRelationFilterSchema';

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  personId: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  person: z.union([ z.lazy(() => PersonNullableRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional()
}).strict();

export default UserWhereInputSchema;
