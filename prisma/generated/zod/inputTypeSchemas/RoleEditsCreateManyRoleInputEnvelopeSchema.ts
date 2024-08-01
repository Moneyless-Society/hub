import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsCreateManyRoleInputSchema } from './RoleEditsCreateManyRoleInputSchema';

export const RoleEditsCreateManyRoleInputEnvelopeSchema: z.ZodType<Prisma.RoleEditsCreateManyRoleInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoleEditsCreateManyRoleInputSchema),z.lazy(() => RoleEditsCreateManyRoleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RoleEditsCreateManyRoleInputEnvelopeSchema;
