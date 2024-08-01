import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AvailabilityCreateWithoutPersonInputSchema } from './AvailabilityCreateWithoutPersonInputSchema';
import { AvailabilityUncheckedCreateWithoutPersonInputSchema } from './AvailabilityUncheckedCreateWithoutPersonInputSchema';
import { AvailabilityCreateOrConnectWithoutPersonInputSchema } from './AvailabilityCreateOrConnectWithoutPersonInputSchema';
import { AvailabilityCreateManyPersonInputEnvelopeSchema } from './AvailabilityCreateManyPersonInputEnvelopeSchema';
import { AvailabilityWhereUniqueInputSchema } from './AvailabilityWhereUniqueInputSchema';

export const AvailabilityCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.AvailabilityCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => AvailabilityCreateWithoutPersonInputSchema),z.lazy(() => AvailabilityCreateWithoutPersonInputSchema).array(),z.lazy(() => AvailabilityUncheckedCreateWithoutPersonInputSchema),z.lazy(() => AvailabilityUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AvailabilityCreateOrConnectWithoutPersonInputSchema),z.lazy(() => AvailabilityCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AvailabilityCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default AvailabilityCreateNestedManyWithoutPersonInputSchema;
