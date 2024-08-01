import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonUpdateOneWithoutCircleAimEditsNestedInputSchema } from './PersonUpdateOneWithoutCircleAimEditsNestedInputSchema';

export const CircleAimEditsUpdateWithoutCircleAimInputSchema: z.ZodType<Prisma.CircleAimEditsUpdateWithoutCircleAimInput> = z.object({
  editor: z.lazy(() => PersonUpdateOneWithoutCircleAimEditsNestedInputSchema).optional()
}).strict();

export default CircleAimEditsUpdateWithoutCircleAimInputSchema;
