import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsWhereUniqueInputSchema } from './RoleEditsWhereUniqueInputSchema';
import { RoleEditsUpdateWithoutEditorInputSchema } from './RoleEditsUpdateWithoutEditorInputSchema';
import { RoleEditsUncheckedUpdateWithoutEditorInputSchema } from './RoleEditsUncheckedUpdateWithoutEditorInputSchema';
import { RoleEditsCreateWithoutEditorInputSchema } from './RoleEditsCreateWithoutEditorInputSchema';
import { RoleEditsUncheckedCreateWithoutEditorInputSchema } from './RoleEditsUncheckedCreateWithoutEditorInputSchema';

export const RoleEditsUpsertWithWhereUniqueWithoutEditorInputSchema: z.ZodType<Prisma.RoleEditsUpsertWithWhereUniqueWithoutEditorInput> = z.object({
  where: z.lazy(() => RoleEditsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoleEditsUpdateWithoutEditorInputSchema),z.lazy(() => RoleEditsUncheckedUpdateWithoutEditorInputSchema) ]),
  create: z.union([ z.lazy(() => RoleEditsCreateWithoutEditorInputSchema),z.lazy(() => RoleEditsUncheckedCreateWithoutEditorInputSchema) ]),
}).strict();

export default RoleEditsUpsertWithWhereUniqueWithoutEditorInputSchema;
