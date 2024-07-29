import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutPersonalInfoInputSchema } from './PersonUpdateWithoutPersonalInfoInputSchema';
import { PersonUncheckedUpdateWithoutPersonalInfoInputSchema } from './PersonUncheckedUpdateWithoutPersonalInfoInputSchema';

export const PersonUpdateToOneWithWhereWithoutPersonalInfoInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutPersonalInfoInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutPersonalInfoInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutPersonalInfoInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutPersonalInfoInputSchema;
