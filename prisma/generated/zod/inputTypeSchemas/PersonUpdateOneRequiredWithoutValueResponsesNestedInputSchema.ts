import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreateWithoutValueResponsesInputSchema } from './PersonCreateWithoutValueResponsesInputSchema';
import { PersonUncheckedCreateWithoutValueResponsesInputSchema } from './PersonUncheckedCreateWithoutValueResponsesInputSchema';
import { PersonCreateOrConnectWithoutValueResponsesInputSchema } from './PersonCreateOrConnectWithoutValueResponsesInputSchema';
import { PersonUpsertWithoutValueResponsesInputSchema } from './PersonUpsertWithoutValueResponsesInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';
import { PersonUpdateToOneWithWhereWithoutValueResponsesInputSchema } from './PersonUpdateToOneWithWhereWithoutValueResponsesInputSchema';
import { PersonUpdateWithoutValueResponsesInputSchema } from './PersonUpdateWithoutValueResponsesInputSchema';
import { PersonUncheckedUpdateWithoutValueResponsesInputSchema } from './PersonUncheckedUpdateWithoutValueResponsesInputSchema';

export const PersonUpdateOneRequiredWithoutValueResponsesNestedInputSchema: z.ZodType<Prisma.PersonUpdateOneRequiredWithoutValueResponsesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutValueResponsesInputSchema),z.lazy(() => PersonUncheckedCreateWithoutValueResponsesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutValueResponsesInputSchema).optional(),
  upsert: z.lazy(() => PersonUpsertWithoutValueResponsesInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PersonUpdateToOneWithWhereWithoutValueResponsesInputSchema),z.lazy(() => PersonUpdateWithoutValueResponsesInputSchema),z.lazy(() => PersonUncheckedUpdateWithoutValueResponsesInputSchema) ]).optional(),
}).strict();

export default PersonUpdateOneRequiredWithoutValueResponsesNestedInputSchema;
