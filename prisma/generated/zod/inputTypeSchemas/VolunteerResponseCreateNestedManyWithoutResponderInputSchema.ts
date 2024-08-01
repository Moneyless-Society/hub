import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseCreateWithoutResponderInputSchema } from './VolunteerResponseCreateWithoutResponderInputSchema';
import { VolunteerResponseUncheckedCreateWithoutResponderInputSchema } from './VolunteerResponseUncheckedCreateWithoutResponderInputSchema';
import { VolunteerResponseCreateOrConnectWithoutResponderInputSchema } from './VolunteerResponseCreateOrConnectWithoutResponderInputSchema';
import { VolunteerResponseCreateManyResponderInputEnvelopeSchema } from './VolunteerResponseCreateManyResponderInputEnvelopeSchema';
import { VolunteerResponseWhereUniqueInputSchema } from './VolunteerResponseWhereUniqueInputSchema';

export const VolunteerResponseCreateNestedManyWithoutResponderInputSchema: z.ZodType<Prisma.VolunteerResponseCreateNestedManyWithoutResponderInput> = z.object({
  create: z.union([ z.lazy(() => VolunteerResponseCreateWithoutResponderInputSchema),z.lazy(() => VolunteerResponseCreateWithoutResponderInputSchema).array(),z.lazy(() => VolunteerResponseUncheckedCreateWithoutResponderInputSchema),z.lazy(() => VolunteerResponseUncheckedCreateWithoutResponderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => VolunteerResponseCreateOrConnectWithoutResponderInputSchema),z.lazy(() => VolunteerResponseCreateOrConnectWithoutResponderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => VolunteerResponseCreateManyResponderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => VolunteerResponseWhereUniqueInputSchema),z.lazy(() => VolunteerResponseWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default VolunteerResponseCreateNestedManyWithoutResponderInputSchema;
