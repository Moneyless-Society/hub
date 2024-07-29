import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const RoleEditsUpdateManyMutationInputSchema: z.ZodType<Prisma.RoleEditsUpdateManyMutationInput> = z.object({
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default RoleEditsUpdateManyMutationInputSchema;
