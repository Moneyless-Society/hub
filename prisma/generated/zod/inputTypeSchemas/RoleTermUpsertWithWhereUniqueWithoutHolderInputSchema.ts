import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTermWhereUniqueInputSchema } from './RoleTermWhereUniqueInputSchema';
import { RoleTermUpdateWithoutHolderInputSchema } from './RoleTermUpdateWithoutHolderInputSchema';
import { RoleTermUncheckedUpdateWithoutHolderInputSchema } from './RoleTermUncheckedUpdateWithoutHolderInputSchema';
import { RoleTermCreateWithoutHolderInputSchema } from './RoleTermCreateWithoutHolderInputSchema';
import { RoleTermUncheckedCreateWithoutHolderInputSchema } from './RoleTermUncheckedCreateWithoutHolderInputSchema';

export const RoleTermUpsertWithWhereUniqueWithoutHolderInputSchema: z.ZodType<Prisma.RoleTermUpsertWithWhereUniqueWithoutHolderInput> = z.object({
  where: z.lazy(() => RoleTermWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RoleTermUpdateWithoutHolderInputSchema),z.lazy(() => RoleTermUncheckedUpdateWithoutHolderInputSchema) ]),
  create: z.union([ z.lazy(() => RoleTermCreateWithoutHolderInputSchema),z.lazy(() => RoleTermUncheckedCreateWithoutHolderInputSchema) ]),
}).strict();

export default RoleTermUpsertWithWhereUniqueWithoutHolderInputSchema;
