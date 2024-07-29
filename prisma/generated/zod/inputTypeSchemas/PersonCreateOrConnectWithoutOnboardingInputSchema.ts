import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonCreateWithoutOnboardingInputSchema } from './PersonCreateWithoutOnboardingInputSchema';
import { PersonUncheckedCreateWithoutOnboardingInputSchema } from './PersonUncheckedCreateWithoutOnboardingInputSchema';

export const PersonCreateOrConnectWithoutOnboardingInputSchema: z.ZodType<Prisma.PersonCreateOrConnectWithoutOnboardingInput> = z.object({
  where: z.lazy(() => PersonWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PersonCreateWithoutOnboardingInputSchema),z.lazy(() => PersonUncheckedCreateWithoutOnboardingInputSchema) ]),
}).strict();

export default PersonCreateOrConnectWithoutOnboardingInputSchema;
