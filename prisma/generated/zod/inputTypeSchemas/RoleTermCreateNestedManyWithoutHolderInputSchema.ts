import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTermCreateWithoutHolderInputSchema } from './RoleTermCreateWithoutHolderInputSchema';
import { RoleTermUncheckedCreateWithoutHolderInputSchema } from './RoleTermUncheckedCreateWithoutHolderInputSchema';
import { RoleTermCreateOrConnectWithoutHolderInputSchema } from './RoleTermCreateOrConnectWithoutHolderInputSchema';
import { RoleTermCreateManyHolderInputEnvelopeSchema } from './RoleTermCreateManyHolderInputEnvelopeSchema';
import { RoleTermWhereUniqueInputSchema } from './RoleTermWhereUniqueInputSchema';

export const RoleTermCreateNestedManyWithoutHolderInputSchema: z.ZodType<Prisma.RoleTermCreateNestedManyWithoutHolderInput> = z.object({
  create: z.union([ z.lazy(() => RoleTermCreateWithoutHolderInputSchema),z.lazy(() => RoleTermCreateWithoutHolderInputSchema).array(),z.lazy(() => RoleTermUncheckedCreateWithoutHolderInputSchema),z.lazy(() => RoleTermUncheckedCreateWithoutHolderInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RoleTermCreateOrConnectWithoutHolderInputSchema),z.lazy(() => RoleTermCreateOrConnectWithoutHolderInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RoleTermCreateManyHolderInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RoleTermWhereUniqueInputSchema),z.lazy(() => RoleTermWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RoleTermCreateNestedManyWithoutHolderInputSchema;
