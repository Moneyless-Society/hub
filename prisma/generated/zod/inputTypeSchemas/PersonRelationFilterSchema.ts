import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonRelationFilterSchema: z.ZodType<Prisma.PersonRelationFilter> = z.object({
  is: z.lazy(() => PersonWhereInputSchema).optional(),
  isNot: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonRelationFilterSchema;
