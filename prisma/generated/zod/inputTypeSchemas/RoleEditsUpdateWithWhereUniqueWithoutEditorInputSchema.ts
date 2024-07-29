import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsWhereUniqueInputSchema } from './RoleEditsWhereUniqueInputSchema';
import { RoleEditsUpdateWithoutEditorInputSchema } from './RoleEditsUpdateWithoutEditorInputSchema';
import { RoleEditsUncheckedUpdateWithoutEditorInputSchema } from './RoleEditsUncheckedUpdateWithoutEditorInputSchema';

export const RoleEditsUpdateWithWhereUniqueWithoutEditorInputSchema: z.ZodType<Prisma.RoleEditsUpdateWithWhereUniqueWithoutEditorInput> = z.object({
  where: z.lazy(() => RoleEditsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoleEditsUpdateWithoutEditorInputSchema),z.lazy(() => RoleEditsUncheckedUpdateWithoutEditorInputSchema) ]),
}).strict();

export default RoleEditsUpdateWithWhereUniqueWithoutEditorInputSchema;
