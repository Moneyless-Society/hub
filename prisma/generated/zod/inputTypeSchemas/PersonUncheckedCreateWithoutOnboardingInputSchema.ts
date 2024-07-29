import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreatepronounsInputSchema } from './PersonCreatepronounsInputSchema';
import { ContactMethodSchema } from './ContactMethodSchema';
import { UserUncheckedCreateNestedOneWithoutPersonInputSchema } from './UserUncheckedCreateNestedOneWithoutPersonInputSchema';
import { PIIUncheckedCreateNestedOneWithoutPersonInputSchema } from './PIIUncheckedCreateNestedOneWithoutPersonInputSchema';
import { RoleTermUncheckedCreateNestedManyWithoutHolderInputSchema } from './RoleTermUncheckedCreateNestedManyWithoutHolderInputSchema';
import { EthicVersionUncheckedCreateNestedManyWithoutSubmitterInputSchema } from './EthicVersionUncheckedCreateNestedManyWithoutSubmitterInputSchema';
import { EthicsToPersonsUncheckedCreateNestedManyWithoutPersonInputSchema } from './EthicsToPersonsUncheckedCreateNestedManyWithoutPersonInputSchema';
import { EthicVersionsToPersonsUncheckedCreateNestedManyWithoutPersonInputSchema } from './EthicVersionsToPersonsUncheckedCreateNestedManyWithoutPersonInputSchema';
import { CirclesToRolesUncheckedCreateNestedManyWithoutIncumbentInputSchema } from './CirclesToRolesUncheckedCreateNestedManyWithoutIncumbentInputSchema';
import { VolunteerResponseUncheckedCreateNestedManyWithoutResponderInputSchema } from './VolunteerResponseUncheckedCreateNestedManyWithoutResponderInputSchema';
import { VolunteerResponseUncheckedCreateNestedManyWithoutImportedByInputSchema } from './VolunteerResponseUncheckedCreateNestedManyWithoutImportedByInputSchema';
import { AvailabilityUncheckedCreateNestedManyWithoutPersonInputSchema } from './AvailabilityUncheckedCreateNestedManyWithoutPersonInputSchema';
import { VolunteerQuestionEditsUncheckedCreateNestedManyWithoutEditorInputSchema } from './VolunteerQuestionEditsUncheckedCreateNestedManyWithoutEditorInputSchema';
import { RoleEditsUncheckedCreateNestedManyWithoutEditorInputSchema } from './RoleEditsUncheckedCreateNestedManyWithoutEditorInputSchema';
import { CircleAimEditsUncheckedCreateNestedManyWithoutEditorInputSchema } from './CircleAimEditsUncheckedCreateNestedManyWithoutEditorInputSchema';

export const PersonUncheckedCreateWithoutOnboardingInputSchema: z.ZodType<Prisma.PersonUncheckedCreateWithoutOnboardingInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  pronouns: z.union([ z.lazy(() => PersonCreatepronounsInputSchema),z.string().array() ]).optional(),
  bio: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isActive: z.boolean().optional(),
  preferredContactMethod: z.lazy(() => ContactMethodSchema).optional().nullable(),
  volunteerQuestionId: z.number().int(),
  user: z.lazy(() => UserUncheckedCreateNestedOneWithoutPersonInputSchema).optional(),
  personalInfo: z.lazy(() => PIIUncheckedCreateNestedOneWithoutPersonInputSchema).optional(),
  roleTerms: z.lazy(() => RoleTermUncheckedCreateNestedManyWithoutHolderInputSchema).optional(),
  valuesWritten: z.lazy(() => EthicVersionUncheckedCreateNestedManyWithoutSubmitterInputSchema).optional(),
  valueRankings: z.lazy(() => EthicsToPersonsUncheckedCreateNestedManyWithoutPersonInputSchema).optional(),
  valueResponses: z.lazy(() => EthicVersionsToPersonsUncheckedCreateNestedManyWithoutPersonInputSchema).optional(),
  circleRoles: z.lazy(() => CirclesToRolesUncheckedCreateNestedManyWithoutIncumbentInputSchema).optional(),
  volunteerResponses: z.lazy(() => VolunteerResponseUncheckedCreateNestedManyWithoutResponderInputSchema).optional(),
  volunterResponsesImported: z.lazy(() => VolunteerResponseUncheckedCreateNestedManyWithoutImportedByInputSchema).optional(),
  availability: z.lazy(() => AvailabilityUncheckedCreateNestedManyWithoutPersonInputSchema).optional(),
  volunteerQuestionEdits: z.lazy(() => VolunteerQuestionEditsUncheckedCreateNestedManyWithoutEditorInputSchema).optional(),
  roleEdits: z.lazy(() => RoleEditsUncheckedCreateNestedManyWithoutEditorInputSchema).optional(),
  circleAimEdits: z.lazy(() => CircleAimEditsUncheckedCreateNestedManyWithoutEditorInputSchema).optional()
}).strict();

export default PersonUncheckedCreateWithoutOnboardingInputSchema;
