import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutAvailabilityInputSchema } from './PersonCreateWithoutAvailabilityInputSchema';
import { PersonUncheckedCreateWithoutAvailabilityInputSchema } from './PersonUncheckedCreateWithoutAvailabilityInputSchema';
import { PersonCreateOrConnectWithoutAvailabilityInputSchema } from './PersonCreateOrConnectWithoutAvailabilityInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutAvailabilityInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutAvailabilityInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutAvailabilityInputSchema),z.lazy(() => PersonUncheckedCreateWithoutAvailabilityInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutAvailabilityInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutAvailabilityInputSchema;
