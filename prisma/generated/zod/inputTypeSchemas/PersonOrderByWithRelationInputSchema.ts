import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { UserOrderByWithRelationInputSchema } from './UserOrderByWithRelationInputSchema';
import { PIIOrderByWithRelationInputSchema } from './PIIOrderByWithRelationInputSchema';
import { RoleTermOrderByRelationAggregateInputSchema } from './RoleTermOrderByRelationAggregateInputSchema';
import { EthicVersionOrderByRelationAggregateInputSchema } from './EthicVersionOrderByRelationAggregateInputSchema';
import { EthicsToPersonsOrderByRelationAggregateInputSchema } from './EthicsToPersonsOrderByRelationAggregateInputSchema';
import { EthicVersionsToPersonsOrderByRelationAggregateInputSchema } from './EthicVersionsToPersonsOrderByRelationAggregateInputSchema';
import { CirclesToRolesOrderByRelationAggregateInputSchema } from './CirclesToRolesOrderByRelationAggregateInputSchema';
import { VolunteerResponseOrderByRelationAggregateInputSchema } from './VolunteerResponseOrderByRelationAggregateInputSchema';
import { OnboardingStepsToPersonsOrderByRelationAggregateInputSchema } from './OnboardingStepsToPersonsOrderByRelationAggregateInputSchema';
import { AvailabilityOrderByRelationAggregateInputSchema } from './AvailabilityOrderByRelationAggregateInputSchema';
import { VolunteerQuestionEditsOrderByRelationAggregateInputSchema } from './VolunteerQuestionEditsOrderByRelationAggregateInputSchema';
import { RoleEditsOrderByRelationAggregateInputSchema } from './RoleEditsOrderByRelationAggregateInputSchema';
import { CircleAimEditsOrderByRelationAggregateInputSchema } from './CircleAimEditsOrderByRelationAggregateInputSchema';

export const PersonOrderByWithRelationInputSchema: z.ZodType<Prisma.PersonOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  pronouns: z.lazy(() => SortOrderSchema).optional(),
  bio: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  preferredContactMethod: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  volunteerQuestionId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  personalInfo: z.lazy(() => PIIOrderByWithRelationInputSchema).optional(),
  roleTerms: z.lazy(() => RoleTermOrderByRelationAggregateInputSchema).optional(),
  valuesWritten: z.lazy(() => EthicVersionOrderByRelationAggregateInputSchema).optional(),
  valueRankings: z.lazy(() => EthicsToPersonsOrderByRelationAggregateInputSchema).optional(),
  valueResponses: z.lazy(() => EthicVersionsToPersonsOrderByRelationAggregateInputSchema).optional(),
  circleRoles: z.lazy(() => CirclesToRolesOrderByRelationAggregateInputSchema).optional(),
  volunteerResponses: z.lazy(() => VolunteerResponseOrderByRelationAggregateInputSchema).optional(),
  volunterResponsesImported: z.lazy(() => VolunteerResponseOrderByRelationAggregateInputSchema).optional(),
  onboarding: z.lazy(() => OnboardingStepsToPersonsOrderByRelationAggregateInputSchema).optional(),
  availability: z.lazy(() => AvailabilityOrderByRelationAggregateInputSchema).optional(),
  volunteerQuestionEdits: z.lazy(() => VolunteerQuestionEditsOrderByRelationAggregateInputSchema).optional(),
  roleEdits: z.lazy(() => RoleEditsOrderByRelationAggregateInputSchema).optional(),
  circleAimEdits: z.lazy(() => CircleAimEditsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default PersonOrderByWithRelationInputSchema;
