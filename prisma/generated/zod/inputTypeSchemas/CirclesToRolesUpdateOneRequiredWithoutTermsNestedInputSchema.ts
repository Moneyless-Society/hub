import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CirclesToRolesCreateWithoutTermsInputSchema } from './CirclesToRolesCreateWithoutTermsInputSchema';
import { CirclesToRolesUncheckedCreateWithoutTermsInputSchema } from './CirclesToRolesUncheckedCreateWithoutTermsInputSchema';
import { CirclesToRolesCreateOrConnectWithoutTermsInputSchema } from './CirclesToRolesCreateOrConnectWithoutTermsInputSchema';
import { CirclesToRolesUpsertWithoutTermsInputSchema } from './CirclesToRolesUpsertWithoutTermsInputSchema';
import { CirclesToRolesWhereUniqueInputSchema } from './CirclesToRolesWhereUniqueInputSchema';
import { CirclesToRolesUpdateToOneWithWhereWithoutTermsInputSchema } from './CirclesToRolesUpdateToOneWithWhereWithoutTermsInputSchema';
import { CirclesToRolesUpdateWithoutTermsInputSchema } from './CirclesToRolesUpdateWithoutTermsInputSchema';
import { CirclesToRolesUncheckedUpdateWithoutTermsInputSchema } from './CirclesToRolesUncheckedUpdateWithoutTermsInputSchema';

export const CirclesToRolesUpdateOneRequiredWithoutTermsNestedInputSchema: z.ZodType<Prisma.CirclesToRolesUpdateOneRequiredWithoutTermsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CirclesToRolesCreateWithoutTermsInputSchema),z.lazy(() => CirclesToRolesUncheckedCreateWithoutTermsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CirclesToRolesCreateOrConnectWithoutTermsInputSchema).optional(),
  upsert: z.lazy(() => CirclesToRolesUpsertWithoutTermsInputSchema).optional(),
  connect: z.lazy(() => CirclesToRolesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CirclesToRolesUpdateToOneWithWhereWithoutTermsInputSchema),z.lazy(() => CirclesToRolesUpdateWithoutTermsInputSchema),z.lazy(() => CirclesToRolesUncheckedUpdateWithoutTermsInputSchema) ]).optional(),
}).strict();

export default CirclesToRolesUpdateOneRequiredWithoutTermsNestedInputSchema;
