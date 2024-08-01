import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionEditsQuestionIdEditorIdCompoundUniqueInputSchema } from './VolunteerQuestionEditsQuestionIdEditorIdCompoundUniqueInputSchema';
import { VolunteerQuestionEditsWhereInputSchema } from './VolunteerQuestionEditsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { VolunteerQuestionRelationFilterSchema } from './VolunteerQuestionRelationFilterSchema';
import { VolunteerQuestionWhereInputSchema } from './VolunteerQuestionWhereInputSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const VolunteerQuestionEditsWhereUniqueInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsWhereUniqueInput> = z.object({
  questionId_editorId: z.lazy(() => VolunteerQuestionEditsQuestionIdEditorIdCompoundUniqueInputSchema)
})
.and(z.object({
  questionId_editorId: z.lazy(() => VolunteerQuestionEditsQuestionIdEditorIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => VolunteerQuestionEditsWhereInputSchema),z.lazy(() => VolunteerQuestionEditsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VolunteerQuestionEditsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VolunteerQuestionEditsWhereInputSchema),z.lazy(() => VolunteerQuestionEditsWhereInputSchema).array() ]).optional(),
  questionId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  editorId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  question: z.union([ z.lazy(() => VolunteerQuestionRelationFilterSchema),z.lazy(() => VolunteerQuestionWhereInputSchema) ]).optional(),
  editor: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
}).strict());

export default VolunteerQuestionEditsWhereUniqueInputSchema;
