import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseWhereUniqueInputSchema } from './VolunteerResponseWhereUniqueInputSchema';
import { VolunteerResponseCreateWithoutResponderInputSchema } from './VolunteerResponseCreateWithoutResponderInputSchema';
import { VolunteerResponseUncheckedCreateWithoutResponderInputSchema } from './VolunteerResponseUncheckedCreateWithoutResponderInputSchema';

export const VolunteerResponseCreateOrConnectWithoutResponderInputSchema: z.ZodType<Prisma.VolunteerResponseCreateOrConnectWithoutResponderInput> = z.object({
  where: z.lazy(() => VolunteerResponseWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => VolunteerResponseCreateWithoutResponderInputSchema),z.lazy(() => VolunteerResponseUncheckedCreateWithoutResponderInputSchema) ]),
}).strict();

export default VolunteerResponseCreateOrConnectWithoutResponderInputSchema;
