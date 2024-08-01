import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimUpdateOneRequiredWithoutEditsNestedInputSchema } from './CircleAimUpdateOneRequiredWithoutEditsNestedInputSchema';
import { PersonUpdateOneWithoutCircleAimEditsNestedInputSchema } from './PersonUpdateOneWithoutCircleAimEditsNestedInputSchema';

export const CircleAimEditsUpdateInputSchema: z.ZodType<Prisma.CircleAimEditsUpdateInput> = z.object({
  circleAim: z.lazy(() => CircleAimUpdateOneRequiredWithoutEditsNestedInputSchema).optional(),
  editor: z.lazy(() => PersonUpdateOneWithoutCircleAimEditsNestedInputSchema).optional()
}).strict();

export default CircleAimEditsUpdateInputSchema;
