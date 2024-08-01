import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsCreateWithoutEditorInputSchema } from './RoleEditsCreateWithoutEditorInputSchema';
import { RoleEditsUncheckedCreateWithoutEditorInputSchema } from './RoleEditsUncheckedCreateWithoutEditorInputSchema';
import { RoleEditsCreateOrConnectWithoutEditorInputSchema } from './RoleEditsCreateOrConnectWithoutEditorInputSchema';
import { RoleEditsCreateManyEditorInputEnvelopeSchema } from './RoleEditsCreateManyEditorInputEnvelopeSchema';
import { RoleEditsWhereUniqueInputSchema } from './RoleEditsWhereUniqueInputSchema';

export const RoleEditsUncheckedCreateNestedManyWithoutEditorInputSchema: z.ZodType<Prisma.RoleEditsUncheckedCreateNestedManyWithoutEditorInput> = z.object({
  create: z.union([ z.lazy(() => RoleEditsCreateWithoutEditorInputSchema),z.lazy(() => RoleEditsCreateWithoutEditorInputSchema).array(),z.lazy(() => RoleEditsUncheckedCreateWithoutEditorInputSchema),z.lazy(() => RoleEditsUncheckedCreateWithoutEditorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleEditsCreateOrConnectWithoutEditorInputSchema),z.lazy(() => RoleEditsCreateOrConnectWithoutEditorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleEditsCreateManyEditorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoleEditsWhereUniqueInputSchema),z.lazy(() => RoleEditsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RoleEditsUncheckedCreateNestedManyWithoutEditorInputSchema;
