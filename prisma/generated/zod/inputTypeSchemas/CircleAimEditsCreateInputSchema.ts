import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CircleAimCreateNestedOneWithoutEditsInputSchema } from './CircleAimCreateNestedOneWithoutEditsInputSchema';
import { PersonCreateNestedOneWithoutCircleAimEditsInputSchema } from './PersonCreateNestedOneWithoutCircleAimEditsInputSchema';

export const CircleAimEditsCreateInputSchema: z.ZodType<Prisma.CircleAimEditsCreateInput> = z.object({
  circleAim: z.lazy(() => CircleAimCreateNestedOneWithoutEditsInputSchema),
  editor: z.lazy(() => PersonCreateNestedOneWithoutCircleAimEditsInputSchema).optional()
}).strict();

export default CircleAimEditsCreateInputSchema;
