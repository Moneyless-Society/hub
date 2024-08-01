import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimEditsCreateManyEditorInputSchema } from './CircleAimEditsCreateManyEditorInputSchema';

export const CircleAimEditsCreateManyEditorInputEnvelopeSchema: z.ZodType<Prisma.CircleAimEditsCreateManyEditorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CircleAimEditsCreateManyEditorInputSchema),z.lazy(() => CircleAimEditsCreateManyEditorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CircleAimEditsCreateManyEditorInputEnvelopeSchema;
