import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreateManyIncumbentInputSchema } from './CirclesToRolesCreateManyIncumbentInputSchema';

export const CirclesToRolesCreateManyIncumbentInputEnvelopeSchema: z.ZodType<Prisma.CirclesToRolesCreateManyIncumbentInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CirclesToRolesCreateManyIncumbentInputSchema),z.lazy(() => CirclesToRolesCreateManyIncumbentInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CirclesToRolesCreateManyIncumbentInputEnvelopeSchema;
