import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseWhereUniqueInputSchema } from './VolunteerResponseWhereUniqueInputSchema';
import { VolunteerResponseUpdateWithoutResponderInputSchema } from './VolunteerResponseUpdateWithoutResponderInputSchema';
import { VolunteerResponseUncheckedUpdateWithoutResponderInputSchema } from './VolunteerResponseUncheckedUpdateWithoutResponderInputSchema';
import { VolunteerResponseCreateWithoutResponderInputSchema } from './VolunteerResponseCreateWithoutResponderInputSchema';
import { VolunteerResponseUncheckedCreateWithoutResponderInputSchema } from './VolunteerResponseUncheckedCreateWithoutResponderInputSchema';

export const VolunteerResponseUpsertWithWhereUniqueWithoutResponderInputSchema: z.ZodType<Prisma.VolunteerResponseUpsertWithWhereUniqueWithoutResponderInput> = z.object({
  where: z.lazy(() => VolunteerResponseWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => VolunteerResponseUpdateWithoutResponderInputSchema),z.lazy(() => VolunteerResponseUncheckedUpdateWithoutResponderInputSchema) ]),
  create: z.union([ z.lazy(() => VolunteerResponseCreateWithoutResponderInputSchema),z.lazy(() => VolunteerResponseUncheckedCreateWithoutResponderInputSchema) ]),
}).strict();

export default VolunteerResponseUpsertWithWhereUniqueWithoutResponderInputSchema;
