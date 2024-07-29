import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { CircleUpdatedomainsInputSchema } from './CircleUpdatedomainsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { CirclesToRolesUpdateManyWithoutCircleNestedInputSchema } from './CirclesToRolesUpdateManyWithoutCircleNestedInputSchema';

export const CircleUpdateWithoutAimsInputSchema: z.ZodType<Prisma.CircleUpdateWithoutAimsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mission: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domains: z.union([ z.lazy(() => CircleUpdatedomainsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedBy: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  roles: z.lazy(() => CirclesToRolesUpdateManyWithoutCircleNestedInputSchema).optional()
}).strict();

export default CircleUpdateWithoutAimsInputSchema;
