import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { PersonUpdatepronounsInputSchema } from './PersonUpdatepronounsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { ContactMethodSchema } from './ContactMethodSchema';
import { NullableEnumContactMethodFieldUpdateOperationsInputSchema } from './NullableEnumContactMethodFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const PersonUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PersonUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pronouns: z.union([ z.lazy(() => PersonUpdatepronounsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  preferredContactMethod: z.union([ z.lazy(() => ContactMethodSchema),z.lazy(() => NullableEnumContactMethodFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  volunteerQuestionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PersonUncheckedUpdateManyInputSchema;
