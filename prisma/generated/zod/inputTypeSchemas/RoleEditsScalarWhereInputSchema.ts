import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const RoleEditsScalarWhereInputSchema: z.ZodType<Prisma.RoleEditsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => RoleEditsScalarWhereInputSchema),z.lazy(() => RoleEditsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RoleEditsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RoleEditsScalarWhereInputSchema),z.lazy(() => RoleEditsScalarWhereInputSchema).array() ]).optional(),
  roleId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  editorId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default RoleEditsScalarWhereInputSchema;
