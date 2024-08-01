import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTermWhereUniqueInputSchema } from './RoleTermWhereUniqueInputSchema';
import { RoleTermUpdateWithoutHolderInputSchema } from './RoleTermUpdateWithoutHolderInputSchema';
import { RoleTermUncheckedUpdateWithoutHolderInputSchema } from './RoleTermUncheckedUpdateWithoutHolderInputSchema';

export const RoleTermUpdateWithWhereUniqueWithoutHolderInputSchema: z.ZodType<Prisma.RoleTermUpdateWithWhereUniqueWithoutHolderInput> = z.object({
  where: z.lazy(() => RoleTermWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RoleTermUpdateWithoutHolderInputSchema),z.lazy(() => RoleTermUncheckedUpdateWithoutHolderInputSchema) ]),
}).strict();

export default RoleTermUpdateWithWhereUniqueWithoutHolderInputSchema;
