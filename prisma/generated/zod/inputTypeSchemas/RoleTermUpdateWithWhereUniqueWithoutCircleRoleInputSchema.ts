import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTermWhereUniqueInputSchema } from './RoleTermWhereUniqueInputSchema';
import { RoleTermUpdateWithoutCircleRoleInputSchema } from './RoleTermUpdateWithoutCircleRoleInputSchema';
import { RoleTermUncheckedUpdateWithoutCircleRoleInputSchema } from './RoleTermUncheckedUpdateWithoutCircleRoleInputSchema';

export const RoleTermUpdateWithWhereUniqueWithoutCircleRoleInputSchema: z.ZodType<Prisma.RoleTermUpdateWithWhereUniqueWithoutCircleRoleInput> = z.object({
  where: z.lazy(() => RoleTermWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoleTermUpdateWithoutCircleRoleInputSchema),z.lazy(() => RoleTermUncheckedUpdateWithoutCircleRoleInputSchema) ]),
}).strict();

export default RoleTermUpdateWithWhereUniqueWithoutCircleRoleInputSchema;
