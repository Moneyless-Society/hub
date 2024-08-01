import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutRoleTermsInputSchema } from './PersonCreateWithoutRoleTermsInputSchema';
import { PersonUncheckedCreateWithoutRoleTermsInputSchema } from './PersonUncheckedCreateWithoutRoleTermsInputSchema';
import { PersonCreateOrConnectWithoutRoleTermsInputSchema } from './PersonCreateOrConnectWithoutRoleTermsInputSchema';
import { PersonUpsertWithoutRoleTermsInputSchema } from './PersonUpsertWithoutRoleTermsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutRoleTermsInputSchema } from './PersonUpdateToOneWithWhereWithoutRoleTermsInputSchema';
import { PersonUpdateWithoutRoleTermsInputSchema } from './PersonUpdateWithoutRoleTermsInputSchema';
import { PersonUncheckedUpdateWithoutRoleTermsInputSchema } from './PersonUncheckedUpdateWithoutRoleTermsInputSchema';

export const PersonUpdateOneRequiredWithoutRoleTermsNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutRoleTermsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutRoleTermsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutRoleTermsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutRoleTermsInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutRoleTermsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutRoleTermsInputSchema),z.lazy(() => PersonUpdateWithoutRoleTermsInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutRoleTermsInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutRoleTermsNestedInputSchema;
