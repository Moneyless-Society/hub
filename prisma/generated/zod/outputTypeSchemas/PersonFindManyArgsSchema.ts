import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PersonIncludeSchema } from '../inputTypeSchemas/PersonIncludeSchema'
import { PersonWhereInputSchema } from '../inputTypeSchemas/PersonWhereInputSchema'
import { PersonOrderByWithRelationInputSchema } from '../inputTypeSchemas/PersonOrderByWithRelationInputSchema'
import { PersonWhereUniqueInputSchema } from '../inputTypeSchemas/PersonWhereUniqueInputSchema'
import { PersonScalarFieldEnumSchema } from '../inputTypeSchemas/PersonScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { PIIArgsSchema } from "../outputTypeSchemas/PIIArgsSchema"
import { RoleTermFindManyArgsSchema } from "../outputTypeSchemas/RoleTermFindManyArgsSchema"
import { EthicVersionFindManyArgsSchema } from "../outputTypeSchemas/EthicVersionFindManyArgsSchema"
import { EthicsToPersonsFindManyArgsSchema } from "../outputTypeSchemas/EthicsToPersonsFindManyArgsSchema"
import { EthicVersionsToPersonsFindManyArgsSchema } from "../outputTypeSchemas/EthicVersionsToPersonsFindManyArgsSchema"
import { CirclesToRolesFindManyArgsSchema } from "../outputTypeSchemas/CirclesToRolesFindManyArgsSchema"
import { VolunteerResponseFindManyArgsSchema } from "../outputTypeSchemas/VolunteerResponseFindManyArgsSchema"
import { OnboardingStepsToPersonsFindManyArgsSchema } from "../outputTypeSchemas/OnboardingStepsToPersonsFindManyArgsSchema"
import { AvailabilityFindManyArgsSchema } from "../outputTypeSchemas/AvailabilityFindManyArgsSchema"
import { VolunteerQuestionEditsFindManyArgsSchema } from "../outputTypeSchemas/VolunteerQuestionEditsFindManyArgsSchema"
import { RoleEditsFindManyArgsSchema } from "../outputTypeSchemas/RoleEditsFindManyArgsSchema"
import { CircleAimEditsFindManyArgsSchema } from "../outputTypeSchemas/CircleAimEditsFindManyArgsSchema"
import { PersonCountOutputTypeArgsSchema } from "../outputTypeSchemas/PersonCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PersonSelectSchema: z.ZodType<Prisma.PersonSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  pronouns: z.boolean().optional(),
  bio: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  isActive: z.boolean().optional(),
  preferredContactMethod: z.boolean().optional(),
  volunteerQuestionId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  personalInfo: z.union([z.boolean(),z.lazy(() => PIIArgsSchema)]).optional(),
  roleTerms: z.union([z.boolean(),z.lazy(() => RoleTermFindManyArgsSchema)]).optional(),
  valuesWritten: z.union([z.boolean(),z.lazy(() => EthicVersionFindManyArgsSchema)]).optional(),
  valueRankings: z.union([z.boolean(),z.lazy(() => EthicsToPersonsFindManyArgsSchema)]).optional(),
  valueResponses: z.union([z.boolean(),z.lazy(() => EthicVersionsToPersonsFindManyArgsSchema)]).optional(),
  circleRoles: z.union([z.boolean(),z.lazy(() => CirclesToRolesFindManyArgsSchema)]).optional(),
  volunteerResponses: z.union([z.boolean(),z.lazy(() => VolunteerResponseFindManyArgsSchema)]).optional(),
  volunterResponsesImported: z.union([z.boolean(),z.lazy(() => VolunteerResponseFindManyArgsSchema)]).optional(),
  onboarding: z.union([z.boolean(),z.lazy(() => OnboardingStepsToPersonsFindManyArgsSchema)]).optional(),
  availability: z.union([z.boolean(),z.lazy(() => AvailabilityFindManyArgsSchema)]).optional(),
  volunteerQuestionEdits: z.union([z.boolean(),z.lazy(() => VolunteerQuestionEditsFindManyArgsSchema)]).optional(),
  roleEdits: z.union([z.boolean(),z.lazy(() => RoleEditsFindManyArgsSchema)]).optional(),
  circleAimEdits: z.union([z.boolean(),z.lazy(() => CircleAimEditsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PersonCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PersonFindManyArgsSchema: z.ZodType<Prisma.PersonFindManyArgs> = z.object({
  select: PersonSelectSchema.optional(),
  include: PersonIncludeSchema.optional(),
  where: PersonWhereInputSchema.optional(),
  orderBy: z.union([ PersonOrderByWithRelationInputSchema.array(),PersonOrderByWithRelationInputSchema ]).optional(),
  cursor: PersonWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PersonScalarFieldEnumSchema,PersonScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default PersonFindManyArgsSchema;
