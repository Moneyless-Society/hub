import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonUpdateWithoutOnboardingInputSchema } from './PersonUpdateWithoutOnboardingInputSchema';
import { PersonUncheckedUpdateWithoutOnboardingInputSchema } from './PersonUncheckedUpdateWithoutOnboardingInputSchema';
import { PersonCreateWithoutOnboardingInputSchema } from './PersonCreateWithoutOnboardingInputSchema';
import { PersonUncheckedCreateWithoutOnboardingInputSchema } from './PersonUncheckedCreateWithoutOnboardingInputSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const PersonUpsertWithoutOnboardingInputSchema: z.ZodType<Prisma.PersonUpsertWithoutOnboardingInput> = z.object({
  update: z.union([ z.lazy(() => PersonUpdateWithoutOnboardingInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutOnboardingInputSchema) ]),
  create: z.union([ z.lazy(() => PersonCreateWithoutOnboardingInputSchema),z.lazy(() => PersonUncheckedCreateWithoutOnboardingInputSchema) ]),
  where: z.lazy(() => PersonWhereInputSchema).optional()
}).strict();

export default PersonUpsertWithoutOnboardingInputSchema;
