import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AvailabilityWhereUniqueInputSchema } from './AvailabilityWhereUniqueInputSchema';
import { AvailabilityCreateWithoutPersonInputSchema } from './AvailabilityCreateWithoutPersonInputSchema';
import { AvailabilityUncheckedCreateWithoutPersonInputSchema } from './AvailabilityUncheckedCreateWithoutPersonInputSchema';

export const AvailabilityCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.AvailabilityCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => AvailabilityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AvailabilityCreateWithoutPersonInputSchema),z.lazy(() => AvailabilityUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default AvailabilityCreateOrConnectWithoutPersonInputSchema;
