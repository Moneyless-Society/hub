import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTermWhereUniqueInputSchema } from './RoleTermWhereUniqueInputSchema';
import { RoleTermCreateWithoutHolderInputSchema } from './RoleTermCreateWithoutHolderInputSchema';
import { RoleTermUncheckedCreateWithoutHolderInputSchema } from './RoleTermUncheckedCreateWithoutHolderInputSchema';

export const RoleTermCreateOrConnectWithoutHolderInputSchema: z.ZodType<Prisma.RoleTermCreateOrConnectWithoutHolderInput> = z.object({
  where: z.lazy(() => RoleTermWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RoleTermCreateWithoutHolderInputSchema),z.lazy(() => RoleTermUncheckedCreateWithoutHolderInputSchema) ]),
}).strict();

export default RoleTermCreateOrConnectWithoutHolderInputSchema;
