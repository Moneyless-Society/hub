import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutPersonalInfoInputSchema } from './PersonCreateWithoutPersonalInfoInputSchema';
import { PersonUncheckedCreateWithoutPersonalInfoInputSchema } from './PersonUncheckedCreateWithoutPersonalInfoInputSchema';
import { PersonCreateOrConnectWithoutPersonalInfoInputSchema } from './PersonCreateOrConnectWithoutPersonalInfoInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutPersonalInfoInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutPersonalInfoInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutPersonalInfoInputSchema),z.lazy(() => PersonUncheckedCreateWithoutPersonalInfoInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutPersonalInfoInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutPersonalInfoInputSchema;
