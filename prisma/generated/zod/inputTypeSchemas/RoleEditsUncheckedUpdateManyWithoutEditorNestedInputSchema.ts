import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleEditsCreateWithoutEditorInputSchema } from './RoleEditsCreateWithoutEditorInputSchema';
import { RoleEditsUncheckedCreateWithoutEditorInputSchema } from './RoleEditsUncheckedCreateWithoutEditorInputSchema';
import { RoleEditsCreateOrConnectWithoutEditorInputSchema } from './RoleEditsCreateOrConnectWithoutEditorInputSchema';
import { RoleEditsUpsertWithWhereUniqueWithoutEditorInputSchema } from './RoleEditsUpsertWithWhereUniqueWithoutEditorInputSchema';
import { RoleEditsCreateManyEditorInputEnvelopeSchema } from './RoleEditsCreateManyEditorInputEnvelopeSchema';
import { RoleEditsWhereUniqueInputSchema } from './RoleEditsWhereUniqueInputSchema';
import { RoleEditsUpdateWithWhereUniqueWithoutEditorInputSchema } from './RoleEditsUpdateWithWhereUniqueWithoutEditorInputSchema';
import { RoleEditsUpdateManyWithWhereWithoutEditorInputSchema } from './RoleEditsUpdateManyWithWhereWithoutEditorInputSchema';
import { RoleEditsScalarWhereInputSchema } from './RoleEditsScalarWhereInputSchema';

export const RoleEditsUncheckedUpdateManyWithoutEditorNestedInputSchema: z.ZodType<Prisma.RoleEditsUncheckedUpdateManyWithoutEditorNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleEditsCreateWithoutEditorInputSchema),z.lazy(() => RoleEditsCreateWithoutEditorInputSchema).array(),z.lazy(() => RoleEditsUncheckedCreateWithoutEditorInputSchema),z.lazy(() => RoleEditsUncheckedCreateWithoutEditorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleEditsCreateOrConnectWithoutEditorInputSchema),z.lazy(() => RoleEditsCreateOrConnectWithoutEditorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleEditsUpsertWithWhereUniqueWithoutEditorInputSchema),z.lazy(() => RoleEditsUpsertWithWhereUniqueWithoutEditorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleEditsCreateManyEditorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoleEditsWhereUniqueInputSchema),z.lazy(() => RoleEditsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleEditsWhereUniqueInputSchema),z.lazy(() => RoleEditsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleEditsWhereUniqueInputSchema),z.lazy(() => RoleEditsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleEditsWhereUniqueInputSchema),z.lazy(() => RoleEditsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleEditsUpdateWithWhereUniqueWithoutEditorInputSchema),z.lazy(() => RoleEditsUpdateWithWhereUniqueWithoutEditorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleEditsUpdateManyWithWhereWithoutEditorInputSchema),z.lazy(() => RoleEditsUpdateManyWithWhereWithoutEditorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleEditsScalarWhereInputSchema),z.lazy(() => RoleEditsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RoleEditsUncheckedUpdateManyWithoutEditorNestedInputSchema;
