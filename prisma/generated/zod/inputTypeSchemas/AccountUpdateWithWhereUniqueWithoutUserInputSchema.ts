import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountWhereUniqueInputSchema } from './AccountWhereUniqueInputSchema';
import { AccountUpdateWithoutUserInputSchema } from './AccountUpdateWithoutUserInputSchema';
import { AccountUncheckedUpdateWithoutUserInputSchema } from './AccountUncheckedUpdateWithoutUserInputSchema';

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AccountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AccountUpdateWithoutUserInputSchema),z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default AccountUpdateWithWhereUniqueWithoutUserInputSchema;
