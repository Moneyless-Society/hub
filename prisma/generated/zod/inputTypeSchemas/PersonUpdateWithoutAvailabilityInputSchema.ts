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
import { UserUpdateOneWithoutPersonNestedInputSchema } from './UserUpdateOneWithoutPersonNestedInputSchema';
import { PIIUpdateOneWithoutPersonNestedInputSchema } from './PIIUpdateOneWithoutPersonNestedInputSchema';
import { RoleTermUpdateManyWithoutHolderNestedInputSchema } from './RoleTermUpdateManyWithoutHolderNestedInputSchema';
import { EthicVersionUpdateManyWithoutSubmitterNestedInputSchema } from './EthicVersionUpdateManyWithoutSubmitterNestedInputSchema';
import { EthicsToPersonsUpdateManyWithoutPersonNestedInputSchema } from './EthicsToPersonsUpdateManyWithoutPersonNestedInputSchema';
import { EthicVersionsToPersonsUpdateManyWithoutPersonNestedInputSchema } from './EthicVersionsToPersonsUpdateManyWithoutPersonNestedInputSchema';
import { CirclesToRolesUpdateManyWithoutIncumbentNestedInputSchema } from './CirclesToRolesUpdateManyWithoutIncumbentNestedInputSchema';
import { VolunteerResponseUpdateManyWithoutResponderNestedInputSchema } from './VolunteerResponseUpdateManyWithoutResponderNestedInputSchema';
import { VolunteerResponseUpdateManyWithoutImportedByNestedInputSchema } from './VolunteerResponseUpdateManyWithoutImportedByNestedInputSchema';
import { OnboardingStepsToPersonsUpdateManyWithoutPersonNestedInputSchema } from './OnboardingStepsToPersonsUpdateManyWithoutPersonNestedInputSchema';
import { VolunteerQuestionEditsUpdateManyWithoutEditorNestedInputSchema } from './VolunteerQuestionEditsUpdateManyWithoutEditorNestedInputSchema';
import { RoleEditsUpdateManyWithoutEditorNestedInputSchema } from './RoleEditsUpdateManyWithoutEditorNestedInputSchema';
import { CircleAimEditsUpdateManyWithoutEditorNestedInputSchema } from './CircleAimEditsUpdateManyWithoutEditorNestedInputSchema';

export const PersonUpdateWithoutAvailabilityInputSchema: z.ZodType<Prisma.PersonUpdateWithoutAvailabilityInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pronouns: z.union([ z.lazy(() => PersonUpdatepronounsInputSchema),z.string().array() ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  preferredContactMethod: z.union([ z.lazy(() => ContactMethodSchema),z.lazy(() => NullableEnumContactMethodFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  volunteerQuestionId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutPersonNestedInputSchema).optional(),
  personalInfo: z.lazy(() => PIIUpdateOneWithoutPersonNestedInputSchema).optional(),
  roleTerms: z.lazy(() => RoleTermUpdateManyWithoutHolderNestedInputSchema).optional(),
  valuesWritten: z.lazy(() => EthicVersionUpdateManyWithoutSubmitterNestedInputSchema).optional(),
  valueRankings: z.lazy(() => EthicsToPersonsUpdateManyWithoutPersonNestedInputSchema).optional(),
  valueResponses: z.lazy(() => EthicVersionsToPersonsUpdateManyWithoutPersonNestedInputSchema).optional(),
  circleRoles: z.lazy(() => CirclesToRolesUpdateManyWithoutIncumbentNestedInputSchema).optional(),
  volunteerResponses: z.lazy(() => VolunteerResponseUpdateManyWithoutResponderNestedInputSchema).optional(),
  volunterResponsesImported: z.lazy(() => VolunteerResponseUpdateManyWithoutImportedByNestedInputSchema).optional(),
  onboarding: z.lazy(() => OnboardingStepsToPersonsUpdateManyWithoutPersonNestedInputSchema).optional(),
  volunteerQuestionEdits: z.lazy(() => VolunteerQuestionEditsUpdateManyWithoutEditorNestedInputSchema).optional(),
  roleEdits: z.lazy(() => RoleEditsUpdateManyWithoutEditorNestedInputSchema).optional(),
  circleAimEdits: z.lazy(() => CircleAimEditsUpdateManyWithoutEditorNestedInputSchema).optional()
}).strict();

export default PersonUpdateWithoutAvailabilityInputSchema;
