import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutAvailabilityInputSchema } from './PersonCreateWithoutAvailabilityInputSchema';
import { PersonUncheckedCreateWithoutAvailabilityInputSchema } from './PersonUncheckedCreateWithoutAvailabilityInputSchema';

export const PersonCreateOrConnectWithoutAvailabilityInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutAvailabilityInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutAvailabilityInputSchema),z.lazy(() => PersonUncheckedCreateWithoutAvailabilityInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutAvailabilityInputSchema;
