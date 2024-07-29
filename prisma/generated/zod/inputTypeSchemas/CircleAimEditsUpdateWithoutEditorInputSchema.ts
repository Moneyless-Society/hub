import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimUpdateOneRequiredWithoutEditsNestedInputSchema } from './CircleAimUpdateOneRequiredWithoutEditsNestedInputSchema';

export const CircleAimEditsUpdateWithoutEditorInputSchema: z.ZodType<Prisma.CircleAimEditsUpdateWithoutEditorInput> = z.object({
  circleAim: z.lazy(() => CircleAimUpdateOneRequiredWithoutEditsNestedInputSchema).optional()
}).strict();

export default CircleAimEditsUpdateWithoutEditorInputSchema;
