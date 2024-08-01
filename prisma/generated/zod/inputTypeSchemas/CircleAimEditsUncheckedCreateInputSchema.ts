import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CircleAimEditsUncheckedCreateInputSchema: z.ZodType<Prisma.CircleAimEditsUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  circleAimId: z.number().int(),
  editorId: z.string().optional().nullable()
}).strict();

export default CircleAimEditsUncheckedCreateInputSchema;
