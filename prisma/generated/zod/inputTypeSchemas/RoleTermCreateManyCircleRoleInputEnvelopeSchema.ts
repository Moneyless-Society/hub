import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTermCreateManyCircleRoleInputSchema } from './RoleTermCreateManyCircleRoleInputSchema';

export const RoleTermCreateManyCircleRoleInputEnvelopeSchema: z.ZodType<Prisma.RoleTermCreateManyCircleRoleInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoleTermCreateManyCircleRoleInputSchema),z.lazy(() => RoleTermCreateManyCircleRoleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RoleTermCreateManyCircleRoleInputEnvelopeSchema;
