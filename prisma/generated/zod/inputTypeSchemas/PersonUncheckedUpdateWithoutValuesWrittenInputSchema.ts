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
import { UserUncheckedUpdateOneWithoutPersonNestedInputSchema } from './UserUncheckedUpdateOneWithoutPersonNestedInputSchema';
import { PIIUncheckedUpdateOneWithoutPersonNestedInputSchema } from './PIIUncheckedUpdateOneWithoutPersonNestedInputSchema';
import { RoleTermUncheckedUpdateManyWithoutHolderNestedInputSchema } from './RoleTermUncheckedUpdateManyWithoutHolderNestedInputSchema';
import { EthicsToPersonsUncheckedUpdateManyWithoutPersonNestedInputSchema } from './EthicsToPersonsUncheckedUpdateManyWithoutPersonNestedInputSchema';
import { EthicVersionsToPersonsUncheckedUpdateManyWithoutPersonNestedInputSchema } from './EthicVersionsToPersonsUncheckedUpdateManyWithoutPersonNestedInputSchema';
import { CirclesToRolesUncheckedUpdateManyWithoutIncumbentNestedInputSchema } from './CirclesToRolesUncheckedUpdateManyWithoutIncumbentNestedInputSchema';
import { VolunteerResponseUncheckedUpdateManyWithoutResponderNestedInputSchema } from './VolunteerResponseUncheckedUpdateManyWithoutResponderNestedInputSchema';
import { VolunteerResponseUncheckedUpdateManyWithoutImportedByNestedInputSchema } from './VolunteerResponseUncheckedUpdateManyWithoutImportedByNestedInputSchema';
import { OnboardingStepsToPersonsUncheckedUpdateManyWithoutPersonNestedInputSchema } from './OnboardingStepsToPersonsUncheckedUpdateManyWithoutPersonNestedInputSchema';
import { AvailabilityUncheckedUpdateManyWithoutPersonNestedInputSchema } from './AvailabilityUncheckedUpdateManyWithoutPersonNestedInputSchema';
import { VolunteerQuestionEditsUncheckedUpdateManyWithoutEditorNestedInputSchema } from './VolunteerQuestionEditsUncheckedUpdateManyWithoutEditorNestedInputSchema';
import { RoleEditsUncheckedUpdateManyWithoutEditorNestedInputSchema } from './RoleEditsUncheckedUpdateManyWithoutEditorNestedInputSchema';
import { CircleAimEditsUncheckedUpdateManyWithoutEditorNestedInputSchema } from './CircleAimEditsUncheckedUpdateManyWithoutEditorNestedInputSchema';

export const PersonUncheckedUpdateWithoutValuesWrittenInputSchema: z.ZodType<Prisma.PersonUncheckedUpdateWithoutValuesWrittenInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pronouns: z.union([ z.lazy(() => PersonUpdatepronounsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  preferredContactMethod: z.union([ z.lazy(() => ContactMethodSchema),z.lazy(() => NullableEnumContactMethodFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  volunteerQuestionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUncheckedUpdateOneWithoutPersonNestedInputSchema).optional(),
  personalInfo: z.lazy(() => PIIUncheckedUpdateOneWithoutPersonNestedInputSchema).optional(),
  roleTerms: z.lazy(() => RoleTermUncheckedUpdateManyWithoutHolderNestedInputSchema).optional(),
  valueRankings: z.lazy(() => EthicsToPersonsUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  valueResponses: z.lazy(() => EthicVersionsToPersonsUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  circleRoles: z.lazy(() => CirclesToRolesUncheckedUpdateManyWithoutIncumbentNestedInputSchema).optional(),
  volunteerResponses: z.lazy(() => VolunteerResponseUncheckedUpdateManyWithoutResponderNestedInputSchema).optional(),
  volunterResponsesImported: z.lazy(() => VolunteerResponseUncheckedUpdateManyWithoutImportedByNestedInputSchema).optional(),
  onboarding: z.lazy(() => OnboardingStepsToPersonsUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  availability: z.lazy(() => AvailabilityUncheckedUpdateManyWithoutPersonNestedInputSchema).optional(),
  volunteerQuestionEdits: z.lazy(() => VolunteerQuestionEditsUncheckedUpdateManyWithoutEditorNestedInputSchema).optional(),
  roleEdits: z.lazy(() => RoleEditsUncheckedUpdateManyWithoutEditorNestedInputSchema).optional(),
  circleAimEdits: z.lazy(() => CircleAimEditsUncheckedUpdateManyWithoutEditorNestedInputSchema).optional()
}).strict();

export default PersonUncheckedUpdateWithoutValuesWrittenInputSchema;
