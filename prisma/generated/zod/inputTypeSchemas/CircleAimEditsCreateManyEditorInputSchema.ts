import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CircleAimEditsCreateManyEditorInputSchema: z.ZodType<Prisma.CircleAimEditsCreateManyEditorInput> = z.object({
  id: z.number().int().optional(),
  circleAimId: z.number().int()
}).strict();

export default CircleAimEditsCreateManyEditorInputSchema;
