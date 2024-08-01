import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CircleAimEditsCreateManyInputSchema: z.ZodType<Prisma.CircleAimEditsCreateManyInput> = z.object({
  id: z.number().int().optional(),
  circleAimId: z.number().int(),
  editorId: z.string().optional().nullable()
}).strict();

export default CircleAimEditsCreateManyInputSchema;
