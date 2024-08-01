import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { VolunteerQuestionOrderByWithRelationInputSchema } from './VolunteerQuestionOrderByWithRelationInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';

export const VolunteerQuestionEditsOrderByWithRelationInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsOrderByWithRelationInput> = z.object({
  questionId: z.lazy(() => SortOrderSchema).optional(),
  editorId: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  question: z.lazy(() => VolunteerQuestionOrderByWithRelationInputSchema).optional(),
  editor: z.lazy(() => PersonOrderByWithRelationInputSchema).optional()
}).strict();

export default VolunteerQuestionEditsOrderByWithRelationInputSchema;
