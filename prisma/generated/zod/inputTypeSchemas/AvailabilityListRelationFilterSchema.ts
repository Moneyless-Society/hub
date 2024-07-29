import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AvailabilityWhereInputSchema } from './AvailabilityWhereInputSchema';

export const AvailabilityListRelationFilterSchema: z.ZodType<Prisma.AvailabilityListRelationFilter> = z.object({
  every: z.lazy(() => AvailabilityWhereInputSchema).optional(),
  some: z.lazy(() => AvailabilityWhereInputSchema).optional(),
  none: z.lazy(() => AvailabilityWhereInputSchema).optional()
}).strict();

export default AvailabilityListRelationFilterSchema;
