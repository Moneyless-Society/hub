import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutOnboardingInputSchema } from './PersonCreateWithoutOnboardingInputSchema';
import { PersonUncheckedCreateWithoutOnboardingInputSchema } from './PersonUncheckedCreateWithoutOnboardingInputSchema';
import { PersonCreateOrConnectWithoutOnboardingInputSchema } from './PersonCreateOrConnectWithoutOnboardingInputSchema';
import { PersonUpsertWithoutOnboardingInputSchema } from './PersonUpsertWithoutOnboardingInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutOnboardingInputSchema } from './PersonUpdateToOneWithWhereWithoutOnboardingInputSchema';
import { PersonUpdateWithoutOnboardingInputSchema } from './PersonUpdateWithoutOnboardingInputSchema';
import { PersonUncheckedUpdateWithoutOnboardingInputSchema } from './PersonUncheckedUpdateWithoutOnboardingInputSchema';

export const PersonUpdateOneRequiredWithoutOnboardingNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutOnboardingNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutOnboardingInputSchema),z.lazy(() => PersonUncheckedCreateWithoutOnboardingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutOnboardingInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutOnboardingInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutOnboardingInputSchema),z.lazy(() => PersonUpdateWithoutOnboardingInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutOnboardingInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutOnboardingNestedInputSchema;
