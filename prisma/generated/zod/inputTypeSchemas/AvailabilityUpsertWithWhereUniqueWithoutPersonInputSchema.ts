import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AvailabilityWhereUniqueInputSchema } from './AvailabilityWhereUniqueInputSchema';
import { AvailabilityUpdateWithoutPersonInputSchema } from './AvailabilityUpdateWithoutPersonInputSchema';
import { AvailabilityUncheckedUpdateWithoutPersonInputSchema } from './AvailabilityUncheckedUpdateWithoutPersonInputSchema';
import { AvailabilityCreateWithoutPersonInputSchema } from './AvailabilityCreateWithoutPersonInputSchema';
import { AvailabilityUncheckedCreateWithoutPersonInputSchema } from './AvailabilityUncheckedCreateWithoutPersonInputSchema';

export const AvailabilityUpsertWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.AvailabilityUpsertWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => AvailabilityWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AvailabilityUpdateWithoutPersonInputSchema),z.lazy(() => AvailabilityUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => AvailabilityCreateWithoutPersonInputSchema),z.lazy(() => AvailabilityUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default AvailabilityUpsertWithWhereUniqueWithoutPersonInputSchema;
