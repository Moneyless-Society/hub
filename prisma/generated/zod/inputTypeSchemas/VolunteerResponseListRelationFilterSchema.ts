import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseWhereInputSchema } from './VolunteerResponseWhereInputSchema';

export const VolunteerResponseListRelationFilterSchema: z.ZodType<Prisma.VolunteerResponseListRelationFilter> = z.object({
  every: z.lazy(() => VolunteerResponseWhereInputSchema).optional(),
  some: z.lazy(() => VolunteerResponseWhereInputSchema).optional(),
  none: z.lazy(() => VolunteerResponseWhereInputSchema).optional()
}).strict();

export default VolunteerResponseListRelationFilterSchema;
