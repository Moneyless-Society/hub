import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTermScalarWhereInputSchema } from './RoleTermScalarWhereInputSchema';
import { RoleTermUpdateManyMutationInputSchema } from './RoleTermUpdateManyMutationInputSchema';
import { RoleTermUncheckedUpdateManyWithoutCircleRoleInputSchema } from './RoleTermUncheckedUpdateManyWithoutCircleRoleInputSchema';

export const RoleTermUpdateManyWithWhereWithoutCircleRoleInputSchema: z.ZodType<Prisma.RoleTermUpdateManyWithWhereWithoutCircleRoleInput> = z.object({
  where: z.lazy(() => RoleTermScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoleTermUpdateManyMutationInputSchema),z.lazy(() => RoleTermUncheckedUpdateManyWithoutCircleRoleInputSchema) ]),
}).strict();

export default RoleTermUpdateManyWithWhereWithoutCircleRoleInputSchema;
