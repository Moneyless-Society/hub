import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleCreateNestedOneWithoutEditsInputSchema } from './RoleCreateNestedOneWithoutEditsInputSchema';

export const RoleEditsCreateWithoutEditorInputSchema: z.ZodType<Prisma.RoleEditsCreateWithoutEditorInput> = z.object({
  updatedAt: z.coerce.date().optional(),
  role: z.lazy(() => RoleCreateNestedOneWithoutEditsInputSchema)
}).strict();

export default RoleEditsCreateWithoutEditorInputSchema;
