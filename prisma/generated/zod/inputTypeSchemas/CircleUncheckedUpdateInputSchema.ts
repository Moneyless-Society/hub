import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { CircleUpdatedomainsInputSchema } from './CircleUpdatedomainsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { CircleAimUncheckedUpdateManyWithoutCircleNestedInputSchema } from './CircleAimUncheckedUpdateManyWithoutCircleNestedInputSchema';
import { CirclesToRolesUncheckedUpdateManyWithoutCircleNestedInputSchema } from './CirclesToRolesUncheckedUpdateManyWithoutCircleNestedInputSchema';

export const CircleUncheckedUpdateInputSchema: z.ZodType<Prisma.CircleUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mission: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domains: z.union([ z.lazy(() => CircleUpdatedomainsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedBy: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  aims: z.lazy(() => CircleAimUncheckedUpdateManyWithoutCircleNestedInputSchema).optional(),
  roles: z.lazy(() => CirclesToRolesUncheckedUpdateManyWithoutCircleNestedInputSchema).optional()
}).strict();

export default CircleUncheckedUpdateInputSchema;
