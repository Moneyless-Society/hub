import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTermCreateWithoutHolderInputSchema } from './RoleTermCreateWithoutHolderInputSchema';
import { RoleTermUncheckedCreateWithoutHolderInputSchema } from './RoleTermUncheckedCreateWithoutHolderInputSchema';
import { RoleTermCreateOrConnectWithoutHolderInputSchema } from './RoleTermCreateOrConnectWithoutHolderInputSchema';
import { RoleTermUpsertWithWhereUniqueWithoutHolderInputSchema } from './RoleTermUpsertWithWhereUniqueWithoutHolderInputSchema';
import { RoleTermCreateManyHolderInputEnvelopeSchema } from './RoleTermCreateManyHolderInputEnvelopeSchema';
import { RoleTermWhereUniqueInputSchema } from './RoleTermWhereUniqueInputSchema';
import { RoleTermUpdateWithWhereUniqueWithoutHolderInputSchema } from './RoleTermUpdateWithWhereUniqueWithoutHolderInputSchema';
import { RoleTermUpdateManyWithWhereWithoutHolderInputSchema } from './RoleTermUpdateManyWithWhereWithoutHolderInputSchema';
import { RoleTermScalarWhereInputSchema } from './RoleTermScalarWhereInputSchema';

export const RoleTermUncheckedUpdateManyWithoutHolderNestedInputSchema: z.ZodType<Prisma.RoleTermUncheckedUpdateManyWithoutHolderNestedInput> = z.object({
  create: z.union([ z.lazy(() => RoleTermCreateWithoutHolderInputSchema),z.lazy(() => RoleTermCreateWithoutHolderInputSchema).array(),z.lazy(() => RoleTermUncheckedCreateWithoutHolderInputSchema),z.lazy(() => RoleTermUncheckedCreateWithoutHolderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleTermCreateOrConnectWithoutHolderInputSchema),z.lazy(() => RoleTermCreateOrConnectWithoutHolderInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RoleTermUpsertWithWhereUniqueWithoutHolderInputSchema),z.lazy(() => RoleTermUpsertWithWhereUniqueWithoutHolderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleTermCreateManyHolderInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RoleTermWhereUniqueInputSchema),z.lazy(() => RoleTermWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RoleTermWhereUniqueInputSchema),z.lazy(() => RoleTermWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RoleTermWhereUniqueInputSchema),z.lazy(() => RoleTermWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RoleTermWhereUniqueInputSchema),z.lazy(() => RoleTermWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RoleTermUpdateWithWhereUniqueWithoutHolderInputSchema),z.lazy(() => RoleTermUpdateWithWhereUniqueWithoutHolderInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RoleTermUpdateManyWithWhereWithoutHolderInputSchema),z.lazy(() => RoleTermUpdateManyWithWhereWithoutHolderInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RoleTermScalarWhereInputSchema),z.lazy(() => RoleTermScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RoleTermUncheckedUpdateManyWithoutHolderNestedInputSchema;
