import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CircleAimEditsUncheckedCreateWithoutEditorInputSchema: z.ZodType<Prisma.CircleAimEditsUncheckedCreateWithoutEditorInput> = z.object({
  id: z.number().int().optional(),
  circleAimId: z.number().int()
}).strict();

export default CircleAimEditsUncheckedCreateWithoutEditorInputSchema;
