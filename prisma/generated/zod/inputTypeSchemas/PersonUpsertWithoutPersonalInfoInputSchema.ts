import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonUpdateWithoutPersonalInfoInputSchema } from './PersonUpdateWithoutPersonalInfoInputSchema';
import { PersonUncheckedUpdateWithoutPersonalInfoInputSchema } from './PersonUncheckedUpdateWithoutPersonalInfoInputSchema';
import { PersonCreateWithoutPersonalInfoInputSchema } from './PersonCreateWithoutPersonalInfoInputSchema';
import { PersonUncheckedCreateWithoutPersonalInfoInputSchema } from './PersonUncheckedCreateWithoutPersonalInfoInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutPersonalInfoInputSchema: z.ZodType<Prisma.PersonUpsertWithoutPersonalInfoInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutPersonalInfoInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutPersonalInfoInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutPersonalInfoInputSchema),z.lazy(() => PersonUncheckedCreateWithoutPersonalInfoInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutPersonalInfoInputSchema;
