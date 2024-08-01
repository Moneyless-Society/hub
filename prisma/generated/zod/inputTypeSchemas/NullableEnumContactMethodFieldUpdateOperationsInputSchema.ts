import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ContactMethodSchema } from './ContactMethodSchema';

export const NullableEnumContactMethodFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumContactMethodFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => ContactMethodSchema).optional().nullable()
}).strict();

export default NullableEnumContactMethodFieldUpdateOperationsInputSchema;
