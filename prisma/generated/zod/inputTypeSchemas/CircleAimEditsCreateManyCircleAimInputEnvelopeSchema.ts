import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsCreateManyCircleAimInputSchema } from './CircleAimEditsCreateManyCircleAimInputSchema';

export const CircleAimEditsCreateManyCircleAimInputEnvelopeSchema: z.ZodType<Prisma.CircleAimEditsCreateManyCircleAimInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CircleAimEditsCreateManyCircleAimInputSchema),z.lazy(() => CircleAimEditsCreateManyCircleAimInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CircleAimEditsCreateManyCircleAimInputEnvelopeSchema;
