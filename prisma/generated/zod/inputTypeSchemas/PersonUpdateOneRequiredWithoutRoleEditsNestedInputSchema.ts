import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutRoleEditsInputSchema } from './PersonCreateWithoutRoleEditsInputSchema';
import { PersonUncheckedCreateWithoutRoleEditsInputSchema } from './PersonUncheckedCreateWithoutRoleEditsInputSchema';
import { PersonCreateOrConnectWithoutRoleEditsInputSchema } from './PersonCreateOrConnectWithoutRoleEditsInputSchema';
import { PersonUpsertWithoutRoleEditsInputSchema } from './PersonUpsertWithoutRoleEditsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutRoleEditsInputSchema } from './PersonUpdateToOneWithWhereWithoutRoleEditsInputSchema';
import { PersonUpdateWithoutRoleEditsInputSchema } from './PersonUpdateWithoutRoleEditsInputSchema';
import { PersonUncheckedUpdateWithoutRoleEditsInputSchema } from './PersonUncheckedUpdateWithoutRoleEditsInputSchema';

export const PersonUpdateOneRequiredWithoutRoleEditsNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutRoleEditsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutRoleEditsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutRoleEditsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutRoleEditsInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutRoleEditsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutRoleEditsInputSchema),z.lazy(() => PersonUpdateWithoutRoleEditsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutRoleEditsInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutRoleEditsNestedInputSchema;
