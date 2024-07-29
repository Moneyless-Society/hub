import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimCreateManyCircleInputSchema } from './CircleAimCreateManyCircleInputSchema';

export const CircleAimCreateManyCircleInputEnvelopeSchema: z.ZodType<Prisma.CircleAimCreateManyCircleInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CircleAimCreateManyCircleInputSchema),z.lazy(() => CircleAimCreateManyCircleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CircleAimCreateManyCircleInputEnvelopeSchema;
