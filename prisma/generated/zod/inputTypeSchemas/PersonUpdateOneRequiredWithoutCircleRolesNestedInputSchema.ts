import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutCircleRolesInputSchema } from './PersonCreateWithoutCircleRolesInputSchema';
import { PersonUncheckedCreateWithoutCircleRolesInputSchema } from './PersonUncheckedCreateWithoutCircleRolesInputSchema';
import { PersonCreateOrConnectWithoutCircleRolesInputSchema } from './PersonCreateOrConnectWithoutCircleRolesInputSchema';
import { PersonUpsertWithoutCircleRolesInputSchema } from './PersonUpsertWithoutCircleRolesInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutCircleRolesInputSchema } from './PersonUpdateToOneWithWhereWithoutCircleRolesInputSchema';
import { PersonUpdateWithoutCircleRolesInputSchema } from './PersonUpdateWithoutCircleRolesInputSchema';
import { PersonUncheckedUpdateWithoutCircleRolesInputSchema } from './PersonUncheckedUpdateWithoutCircleRolesInputSchema';

export const PersonUpdateOneRequiredWithoutCircleRolesNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutCircleRolesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutCircleRolesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutCircleRolesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutCircleRolesInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutCircleRolesInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutCircleRolesInputSchema),z.lazy(() => PersonUpdateWithoutCircleRolesInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutCircleRolesInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutCircleRolesNestedInputSchema;
