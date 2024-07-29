import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutPersonalInfoInputSchema } from './PersonCreateWithoutPersonalInfoInputSchema';
import { PersonUncheckedCreateWithoutPersonalInfoInputSchema } from './PersonUncheckedCreateWithoutPersonalInfoInputSchema';
import { PersonCreateOrConnectWithoutPersonalInfoInputSchema } from './PersonCreateOrConnectWithoutPersonalInfoInputSchema';
import { PersonUpsertWithoutPersonalInfoInputSchema } from './PersonUpsertWithoutPersonalInfoInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutPersonalInfoInputSchema } from './PersonUpdateToOneWithWhereWithoutPersonalInfoInputSchema';
import { PersonUpdateWithoutPersonalInfoInputSchema } from './PersonUpdateWithoutPersonalInfoInputSchema';
import { PersonUncheckedUpdateWithoutPersonalInfoInputSchema } from './PersonUncheckedUpdateWithoutPersonalInfoInputSchema';

export const PersonUpdateOneRequiredWithoutPersonalInfoNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutPersonalInfoNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutPersonalInfoInputSchema),z.lazy(() => PersonUncheckedCreateWithoutPersonalInfoInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutPersonalInfoInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutPersonalInfoInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutPersonalInfoInputSchema),z.lazy(() => PersonUpdateWithoutPersonalInfoInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutPersonalInfoInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutPersonalInfoNestedInputSchema;
