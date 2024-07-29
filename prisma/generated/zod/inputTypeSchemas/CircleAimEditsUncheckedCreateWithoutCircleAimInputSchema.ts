import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CircleAimEditsUncheckedCreateWithoutCircleAimInputSchema: z.ZodType<Prisma.CircleAimEditsUncheckedCreateWithoutCircleAimInput> = z.object({
  id: z.number().int().optional(),
  editorId: z.string().optional().nullable()
}).strict();

export default CircleAimEditsUncheckedCreateWithoutCircleAimInputSchema;
