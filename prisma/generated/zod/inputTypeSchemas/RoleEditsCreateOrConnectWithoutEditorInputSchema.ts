import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsWhereUniqueInputSchema } from './RoleEditsWhereUniqueInputSchema';
import { RoleEditsCreateWithoutEditorInputSchema } from './RoleEditsCreateWithoutEditorInputSchema';
import { RoleEditsUncheckedCreateWithoutEditorInputSchema } from './RoleEditsUncheckedCreateWithoutEditorInputSchema';

export const RoleEditsCreateOrConnectWithoutEditorInputSchema: z.ZodType<Prisma.RoleEditsCreateOrConnectWithoutEditorInput> = z.object({
  where: z.lazy(() => RoleEditsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleEditsCreateWithoutEditorInputSchema),z.lazy(() => RoleEditsUncheckedCreateWithoutEditorInputSchema) ]),
}).strict();

export default RoleEditsCreateOrConnectWithoutEditorInputSchema;
