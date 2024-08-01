import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreateManyCircleInputSchema } from './CirclesToRolesCreateManyCircleInputSchema';

export const CirclesToRolesCreateManyCircleInputEnvelopeSchema: z.ZodType<Prisma.CirclesToRolesCreateManyCircleInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CirclesToRolesCreateManyCircleInputSchema),z.lazy(() => CirclesToRolesCreateManyCircleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CirclesToRolesCreateManyCircleInputEnvelopeSchema;
