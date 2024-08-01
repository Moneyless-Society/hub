import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AvailabilityWhereUniqueInputSchema } from './AvailabilityWhereUniqueInputSchema';
import { AvailabilityUpdateWithoutPersonInputSchema } from './AvailabilityUpdateWithoutPersonInputSchema';
import { AvailabilityUncheckedUpdateWithoutPersonInputSchema } from './AvailabilityUncheckedUpdateWithoutPersonInputSchema';

export const AvailabilityUpdateWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.AvailabilityUpdateWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => AvailabilityWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AvailabilityUpdateWithoutPersonInputSchema),z.lazy(() => AvailabilityUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export default AvailabilityUpdateWithWhereUniqueWithoutPersonInputSchema;
