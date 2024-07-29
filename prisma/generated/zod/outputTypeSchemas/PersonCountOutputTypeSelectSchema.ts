import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PersonCountOutputTypeSelectSchema: z.ZodType<Prisma.PersonCountOutputTypeSelect> = z.object({
  roleTerms: z.boolean().optional(),
  valuesWritten: z.boolean().optional(),
  valueRankings: z.boolean().optional(),
  valueResponses: z.boolean().optional(),
  circleRoles: z.boolean().optional(),
  volunteerResponses: z.boolean().optional(),
  volunterResponsesImported: z.boolean().optional(),
  onboarding: z.boolean().optional(),
  availability: z.boolean().optional(),
  volunteerQuestionEdits: z.boolean().optional(),
  roleEdits: z.boolean().optional(),
  circleAimEdits: z.boolean().optional(),
}).strict();

export default PersonCountOutputTypeSelectSchema;
