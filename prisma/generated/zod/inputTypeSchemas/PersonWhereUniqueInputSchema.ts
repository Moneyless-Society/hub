import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EnumContactMethodNullableFilterSchema } from './EnumContactMethodNullableFilterSchema';
import { ContactMethodSchema } from './ContactMethodSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { PIINullableRelationFilterSchema } from './PIINullableRelationFilterSchema';
import { PIIWhereInputSchema } from './PIIWhereInputSchema';
import { RoleTermListRelationFilterSchema } from './RoleTermListRelationFilterSchema';
import { EthicVersionListRelationFilterSchema } from './EthicVersionListRelationFilterSchema';
import { EthicsToPersonsListRelationFilterSchema } from './EthicsToPersonsListRelationFilterSchema';
import { EthicVersionsToPersonsListRelationFilterSchema } from './EthicVersionsToPersonsListRelationFilterSchema';
import { CirclesToRolesListRelationFilterSchema } from './CirclesToRolesListRelationFilterSchema';
import { VolunteerResponseListRelationFilterSchema } from './VolunteerResponseListRelationFilterSchema';
import { OnboardingStepsToPersonsListRelationFilterSchema } from './OnboardingStepsToPersonsListRelationFilterSchema';
import { AvailabilityListRelationFilterSchema } from './AvailabilityListRelationFilterSchema';
import { VolunteerQuestionEditsListRelationFilterSchema } from './VolunteerQuestionEditsListRelationFilterSchema';
import { RoleEditsListRelationFilterSchema } from './RoleEditsListRelationFilterSchema';
import { CircleAimEditsListRelationFilterSchema } from './CircleAimEditsListRelationFilterSchema';

export const PersonWhereUniqueInputSchema: z.ZodType<Prisma.PersonWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => PersonWhereInputSchema),z.lazy(() => PersonWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonWhereInputSchema),z.lazy(() => PersonWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pronouns: z.lazy(() => StringNullableListFilterSchema).optional(),
  bio: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  preferredContactMethod: z.union([ z.lazy(() => EnumContactMethodNullableFilterSchema),z.lazy(() => ContactMethodSchema) ]).optional().nullable(),
  volunteerQuestionId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  personalInfo: z.union([ z.lazy(() => PIINullableRelationFilterSchema),z.lazy(() => PIIWhereInputSchema) ]).optional().nullable(),
  roleTerms: z.lazy(() => RoleTermListRelationFilterSchema).optional(),
  valuesWritten: z.lazy(() => EthicVersionListRelationFilterSchema).optional(),
  valueRankings: z.lazy(() => EthicsToPersonsListRelationFilterSchema).optional(),
  valueResponses: z.lazy(() => EthicVersionsToPersonsListRelationFilterSchema).optional(),
  circleRoles: z.lazy(() => CirclesToRolesListRelationFilterSchema).optional(),
  volunteerResponses: z.lazy(() => VolunteerResponseListRelationFilterSchema).optional(),
  volunterResponsesImported: z.lazy(() => VolunteerResponseListRelationFilterSchema).optional(),
  onboarding: z.lazy(() => OnboardingStepsToPersonsListRelationFilterSchema).optional(),
  availability: z.lazy(() => AvailabilityListRelationFilterSchema).optional(),
  volunteerQuestionEdits: z.lazy(() => VolunteerQuestionEditsListRelationFilterSchema).optional(),
  roleEdits: z.lazy(() => RoleEditsListRelationFilterSchema).optional(),
  circleAimEdits: z.lazy(() => CircleAimEditsListRelationFilterSchema).optional()
}).strict());

export default PersonWhereUniqueInputSchema;
