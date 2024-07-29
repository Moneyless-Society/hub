import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutOnboardingInputSchema } from './PersonCreateWithoutOnboardingInputSchema';
import { PersonUncheckedCreateWithoutOnboardingInputSchema } from './PersonUncheckedCreateWithoutOnboardingInputSchema';
import { PersonCreateOrConnectWithoutOnboardingInputSchema } from './PersonCreateOrConnectWithoutOnboardingInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutOnboardingInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutOnboardingInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutOnboardingInputSchema),z.lazy(() => PersonUncheckedCreateWithoutOnboardingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutOnboardingInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutOnboardingInputSchema;
