import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CircleAimEditsCreateManyCircleAimInputSchema: z.ZodType<Prisma.CircleAimEditsCreateManyCircleAimInput> = z.object({
  id: z.number().int().optional(),
  editorId: z.string().optional().nullable()
}).strict();

export default CircleAimEditsCreateManyCircleAimInputSchema;
