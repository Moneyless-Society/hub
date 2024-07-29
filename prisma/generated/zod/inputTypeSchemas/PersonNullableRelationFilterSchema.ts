import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonNullableRelationFilterSchema: z.ZodType<Prisma.PersonNullableRelationFilter> = z.object({
  is: z.lazy(() => PersonWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => PersonWhereInputSchema).optional().nullable()
}).strict();

export default PersonNullableRelationFilterSchema;
