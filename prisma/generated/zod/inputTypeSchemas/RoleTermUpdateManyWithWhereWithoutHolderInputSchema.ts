import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTermScalarWhereInputSchema } from './RoleTermScalarWhereInputSchema';
import { RoleTermUpdateManyMutationInputSchema } from './RoleTermUpdateManyMutationInputSchema';
import { RoleTermUncheckedUpdateManyWithoutHolderInputSchema } from './RoleTermUncheckedUpdateManyWithoutHolderInputSchema';

export const RoleTermUpdateManyWithWhereWithoutHolderInputSchema: z.ZodType<Prisma.RoleTermUpdateManyWithWhereWithoutHolderInput> = z.object({
  where: z.lazy(() => RoleTermScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RoleTermUpdateManyMutationInputSchema),z.lazy(() => RoleTermUncheckedUpdateManyWithoutHolderInputSchema) ]),
}).strict();

export default RoleTermUpdateManyWithWhereWithoutHolderInputSchema;
