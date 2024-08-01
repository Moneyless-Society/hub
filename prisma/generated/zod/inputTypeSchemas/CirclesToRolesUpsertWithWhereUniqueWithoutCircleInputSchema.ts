import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesWhereUniqueInputSchema } from './CirclesToRolesWhereUniqueInputSchema';
import { CirclesToRolesUpdateWithoutCircleInputSchema } from './CirclesToRolesUpdateWithoutCircleInputSchema';
import { CirclesToRolesUncheckedUpdateWithoutCircleInputSchema } from './CirclesToRolesUncheckedUpdateWithoutCircleInputSchema';
import { CirclesToRolesCreateWithoutCircleInputSchema } from './CirclesToRolesCreateWithoutCircleInputSchema';
import { CirclesToRolesUncheckedCreateWithoutCircleInputSchema } from './CirclesToRolesUncheckedCreateWithoutCircleInputSchema';

export const CirclesToRolesUpsertWithWhereUniqueWithoutCircleInputSchema: z.ZodType<Prisma.CirclesToRolesUpsertWithWhereUniqueWithoutCircleInput> = z.object({
  where: z.lazy(() => CirclesToRolesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CirclesToRolesUpdateWithoutCircleInputSchema),z.lazy(() => CirclesToRolesUncheckedUpdateWithoutCircleInputSchema) ]),
  create: z.union([ z.lazy(() => CirclesToRolesCreateWithoutCircleInputSchema),z.lazy(() => CirclesToRolesUncheckedCreateWithoutCircleInputSchema) ]),
}).strict();

export default CirclesToRolesUpsertWithWhereUniqueWithoutCircleInputSchema;
