import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreateManyRoleInputSchema } from './CirclesToRolesCreateManyRoleInputSchema';

export const CirclesToRolesCreateManyRoleInputEnvelopeSchema: z.ZodType<Prisma.CirclesToRolesCreateManyRoleInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CirclesToRolesCreateManyRoleInputSchema),z.lazy(() => CirclesToRolesCreateManyRoleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CirclesToRolesCreateManyRoleInputEnvelopeSchema;
