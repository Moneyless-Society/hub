import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonCreatepronounsInputSchema } from './PersonCreatepronounsInputSchema';
import { ContactMethodSchema } from './ContactMethodSchema';
import { UserCreateNestedOneWithoutPersonInputSchema } from './UserCreateNestedOneWithoutPersonInputSchema';
import { PIICreateNestedOneWithoutPersonInputSchema } from './PIICreateNestedOneWithoutPersonInputSchema';
import { RoleTermCreateNestedManyWithoutHolderInputSchema } from './RoleTermCreateNestedManyWithoutHolderInputSchema';
import { EthicVersionCreateNestedManyWithoutSubmitterInputSchema } from './EthicVersionCreateNestedManyWithoutSubmitterInputSchema';
import { EthicsToPersonsCreateNestedManyWithoutPersonInputSchema } from './EthicsToPersonsCreateNestedManyWithoutPersonInputSchema';
import { EthicVersionsToPersonsCreateNestedManyWithoutPersonInputSchema } from './EthicVersionsToPersonsCreateNestedManyWithoutPersonInputSchema';
import { VolunteerResponseCreateNestedManyWithoutResponderInputSchema } from './VolunteerResponseCreateNestedManyWithoutResponderInputSchema';
import { VolunteerResponseCreateNestedManyWithoutImportedByInputSchema } from './VolunteerResponseCreateNestedManyWithoutImportedByInputSchema';
import { OnboardingStepsToPersonsCreateNestedManyWithoutPersonInputSchema } from './OnboardingStepsToPersonsCreateNestedManyWithoutPersonInputSchema';
import { AvailabilityCreateNestedManyWithoutPersonInputSchema } from './AvailabilityCreateNestedManyWithoutPersonInputSchema';
import { VolunteerQuestionEditsCreateNestedManyWithoutEditorInputSchema } from './VolunteerQuestionEditsCreateNestedManyWithoutEditorInputSchema';
import { RoleEditsCreateNestedManyWithoutEditorInputSchema } from './RoleEditsCreateNestedManyWithoutEditorInputSchema';
import { CircleAimEditsCreateNestedManyWithoutEditorInputSchema } from './CircleAimEditsCreateNestedManyWithoutEditorInputSchema';

export const PersonCreateWithoutCircleRolesInputSchema: z.ZodType<Prisma.PersonCreateWithoutCircleRolesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  pronouns: z.union([ z.lazy(() => PersonCreatepronounsInputSchema),z.string().array() ]).optional(),
  bio: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  isActive: z.boolean().optional(),
  preferredContactMethod: z.lazy(() => ContactMethodSchema).optional().nullable(),
  volunteerQuestionId: z.number().int(),
  user: z.lazy(() => UserCreateNestedOneWithoutPersonInputSchema).optional(),
  personalInfo: z.lazy(() => PIICreateNestedOneWithoutPersonInputSchema).optional(),
  roleTerms: z.lazy(() => RoleTermCreateNestedManyWithoutHolderInputSchema).optional(),
  valuesWritten: z.lazy(() => EthicVersionCreateNestedManyWithoutSubmitterInputSchema).optional(),
  valueRankings: z.lazy(() => EthicsToPersonsCreateNestedManyWithoutPersonInputSchema).optional(),
  valueResponses: z.lazy(() => EthicVersionsToPersonsCreateNestedManyWithoutPersonInputSchema).optional(),
  volunteerResponses: z.lazy(() => VolunteerResponseCreateNestedManyWithoutResponderInputSchema).optional(),
  volunterResponsesImported: z.lazy(() => VolunteerResponseCreateNestedManyWithoutImportedByInputSchema).optional(),
  onboarding: z.lazy(() => OnboardingStepsToPersonsCreateNestedManyWithoutPersonInputSchema).optional(),
  availability: z.lazy(() => AvailabilityCreateNestedManyWithoutPersonInputSchema).optional(),
  volunteerQuestionEdits: z.lazy(() => VolunteerQuestionEditsCreateNestedManyWithoutEditorInputSchema).optional(),
  roleEdits: z.lazy(() => RoleEditsCreateNestedManyWithoutEditorInputSchema).optional(),
  circleAimEdits: z.lazy(() => CircleAimEditsCreateNestedManyWithoutEditorInputSchema).optional()
}).strict();

export default PersonCreateWithoutCircleRolesInputSchema;
