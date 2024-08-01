import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OnboardingStepsToPersonsStepIdPersonIdCompoundUniqueInputSchema } from './OnboardingStepsToPersonsStepIdPersonIdCompoundUniqueInputSchema';
import { OnboardingStepsToPersonsWhereInputSchema } from './OnboardingStepsToPersonsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { OnboardingStepRelationFilterSchema } from './OnboardingStepRelationFilterSchema';
import { OnboardingStepWhereInputSchema } from './OnboardingStepWhereInputSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const OnboardingStepsToPersonsWhereUniqueInputSchema: z.ZodType<Prisma.OnboardingStepsToPersonsWhereUniqueInput> = z.object({
  stepId_personId: z.lazy(() => OnboardingStepsToPersonsStepIdPersonIdCompoundUniqueInputSchema)
})
.and(z.object({
  stepId_personId: z.lazy(() => OnboardingStepsToPersonsStepIdPersonIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => OnboardingStepsToPersonsWhereInputSchema),z.lazy(() => OnboardingStepsToPersonsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OnboardingStepsToPersonsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OnboardingStepsToPersonsWhereInputSchema),z.lazy(() => OnboardingStepsToPersonsWhereInputSchema).array() ]).optional(),
  stepId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  personId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  complete: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  doesOnboarding: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  step: z.union([ z.lazy(() => OnboardingStepRelationFilterSchema),z.lazy(() => OnboardingStepWhereInputSchema) ]).optional(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
}).strict());

export default OnboardingStepsToPersonsWhereUniqueInputSchema;
