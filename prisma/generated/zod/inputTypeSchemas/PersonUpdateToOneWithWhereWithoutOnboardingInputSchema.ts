import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonUpdateWithoutOnboardingInputSchema } from './PersonUpdateWithoutOnboardingInputSchema';
import { PersonUncheckedUpdateWithoutOnboardingInputSchema } from './PersonUncheckedUpdateWithoutOnboardingInputSchema';

export const PersonUpdateToOneWithWhereWithoutOnboardingInputSchema: z.ZodType<Prisma.PersonUpdateToOneWithWhereWithoutOnboardingInput> = z.object({
  where: z.lazy(() => PersonWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PersonUpdateWithoutOnboardingInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutOnboardingInputSchema) ]),
}).strict();

export default PersonUpdateToOneWithWhereWithoutOnboardingInputSchema;
