import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTermWhereUniqueInputSchema } from './RoleTermWhereUniqueInputSchema';
import { RoleTermUpdateWithoutCircleRoleInputSchema } from './RoleTermUpdateWithoutCircleRoleInputSchema';
import { RoleTermUncheckedUpdateWithoutCircleRoleInputSchema } from './RoleTermUncheckedUpdateWithoutCircleRoleInputSchema';
import { RoleTermCreateWithoutCircleRoleInputSchema } from './RoleTermCreateWithoutCircleRoleInputSchema';
import { RoleTermUncheckedCreateWithoutCircleRoleInputSchema } from './RoleTermUncheckedCreateWithoutCircleRoleInputSchema';

export const RoleTermUpsertWithWhereUniqueWithoutCircleRoleInputSchema: z.ZodType<Prisma.RoleTermUpsertWithWhereUniqueWithoutCircleRoleInput> = z.object({
  where: z.lazy(() => RoleTermWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoleTermUpdateWithoutCircleRoleInputSchema),z.lazy(() => RoleTermUncheckedUpdateWithoutCircleRoleInputSchema) ]),
  create: z.union([ z.lazy(() => RoleTermCreateWithoutCircleRoleInputSchema),z.lazy(() => RoleTermUncheckedCreateWithoutCircleRoleInputSchema) ]),
}).strict();

export default RoleTermUpsertWithWhereUniqueWithoutCircleRoleInputSchema;
