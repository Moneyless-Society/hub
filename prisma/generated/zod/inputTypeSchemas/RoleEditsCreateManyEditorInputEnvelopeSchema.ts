import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsCreateManyEditorInputSchema } from './RoleEditsCreateManyEditorInputSchema';

export const RoleEditsCreateManyEditorInputEnvelopeSchema: z.ZodType<Prisma.RoleEditsCreateManyEditorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoleEditsCreateManyEditorInputSchema),z.lazy(() => RoleEditsCreateManyEditorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RoleEditsCreateManyEditorInputEnvelopeSchema;
