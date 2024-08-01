import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsScalarWhereInputSchema } from './RoleEditsScalarWhereInputSchema';
import { RoleEditsUpdateManyMutationInputSchema } from './RoleEditsUpdateManyMutationInputSchema';
import { RoleEditsUncheckedUpdateManyWithoutEditorInputSchema } from './RoleEditsUncheckedUpdateManyWithoutEditorInputSchema';

export const RoleEditsUpdateManyWithWhereWithoutEditorInputSchema: z.ZodType<Prisma.RoleEditsUpdateManyWithWhereWithoutEditorInput> = z.object({
  where: z.lazy(() => RoleEditsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoleEditsUpdateManyMutationInputSchema),z.lazy(() => RoleEditsUncheckedUpdateManyWithoutEditorInputSchema) ]),
}).strict();

export default RoleEditsUpdateManyWithWhereWithoutEditorInputSchema;
