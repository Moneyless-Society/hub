import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseWhereUniqueInputSchema } from './VolunteerResponseWhereUniqueInputSchema';
import { VolunteerResponseUpdateWithoutResponderInputSchema } from './VolunteerResponseUpdateWithoutResponderInputSchema';
import { VolunteerResponseUncheckedUpdateWithoutResponderInputSchema } from './VolunteerResponseUncheckedUpdateWithoutResponderInputSchema';

export const VolunteerResponseUpdateWithWhereUniqueWithoutResponderInputSchema: z.ZodType<Prisma.VolunteerResponseUpdateWithWhereUniqueWithoutResponderInput> = z.object({
  where: z.lazy(() => VolunteerResponseWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => VolunteerResponseUpdateWithoutResponderInputSchema),z.lazy(() => VolunteerResponseUncheckedUpdateWithoutResponderInputSchema) ]),
}).strict();

export default VolunteerResponseUpdateWithWhereUniqueWithoutResponderInputSchema;
