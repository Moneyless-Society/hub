import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AvailabilityScalarWhereInputSchema } from './AvailabilityScalarWhereInputSchema';
import { AvailabilityUpdateManyMutationInputSchema } from './AvailabilityUpdateManyMutationInputSchema';
import { AvailabilityUncheckedUpdateManyWithoutPersonInputSchema } from './AvailabilityUncheckedUpdateManyWithoutPersonInputSchema';

export const AvailabilityUpdateManyWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.AvailabilityUpdateManyWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => AvailabilityScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AvailabilityUpdateManyMutationInputSchema),z.lazy(() => AvailabilityUncheckedUpdateManyWithoutPersonInputSchema) ]),
}).strict();

export default AvailabilityUpdateManyWithWhereWithoutPersonInputSchema;
