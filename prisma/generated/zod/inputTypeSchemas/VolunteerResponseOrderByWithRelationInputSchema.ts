import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { VolunteerQuestionOrderByWithRelationInputSchema } from './VolunteerQuestionOrderByWithRelationInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';

export const VolunteerResponseOrderByWithRelationInputSchema: z.ZodType<Prisma.VolunteerResponseOrderByWithRelationInput> = z.object({
  questionId: z.lazy(() => SortOrderSchema).optional(),
  responderId: z.lazy(() => SortOrderSchema).optional(),
  answer: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  importerId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  submittedAt: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  question: z.lazy(() => VolunteerQuestionOrderByWithRelationInputSchema).optional(),
  responder: z.lazy(() => PersonOrderByWithRelationInputSchema).optional(),
  importedBy: z.lazy(() => PersonOrderByWithRelationInputSchema).optional()
}).strict();

export default VolunteerResponseOrderByWithRelationInputSchema;
