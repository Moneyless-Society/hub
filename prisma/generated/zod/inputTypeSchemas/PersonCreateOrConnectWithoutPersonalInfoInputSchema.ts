import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutPersonalInfoInputSchema } from './PersonCreateWithoutPersonalInfoInputSchema';
import { PersonUncheckedCreateWithoutPersonalInfoInputSchema } from './PersonUncheckedCreateWithoutPersonalInfoInputSchema';

export const PersonCreateOrConnectWithoutPersonalInfoInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutPersonalInfoInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutPersonalInfoInputSchema),z.lazy(() => PersonUncheckedCreateWithoutPersonalInfoInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutPersonalInfoInputSchema;
