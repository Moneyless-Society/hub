import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateNestedOneWithoutCircleAimEditsInputSchema } from './PersonCreateNestedOneWithoutCircleAimEditsInputSchema';

export const CircleAimEditsCreateWithoutCircleAimInputSchema: z.ZodType<Prisma.CircleAimEditsCreateWithoutCircleAimInput> = z.object({
  editor: z.lazy(() => PersonCreateNestedOneWithoutCircleAimEditsInputSchema).optional()
}).strict();

export default CircleAimEditsCreateWithoutCircleAimInputSchema;
