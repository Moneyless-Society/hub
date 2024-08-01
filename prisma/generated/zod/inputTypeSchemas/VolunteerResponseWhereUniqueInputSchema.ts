import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerResponseQuestionIdResponderIdCompoundUniqueInputSchema } from './VolunteerResponseQuestionIdResponderIdCompoundUniqueInputSchema';
import { VolunteerResponseWhereInputSchema } from './VolunteerResponseWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { VolunteerQuestionRelationFilterSchema } from './VolunteerQuestionRelationFilterSchema';
import { VolunteerQuestionWhereInputSchema } from './VolunteerQuestionWhereInputSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PersonNullableRelationFilterSchema } from './PersonNullableRelationFilterSchema';

export const VolunteerResponseWhereUniqueInputSchema: z.ZodType<Prisma.VolunteerResponseWhereUniqueInput> = z.object({
  questionId_responderId: z.lazy(() => VolunteerResponseQuestionIdResponderIdCompoundUniqueInputSchema)
})
.and(z.object({
  questionId_responderId: z.lazy(() => VolunteerResponseQuestionIdResponderIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => VolunteerResponseWhereInputSchema),z.lazy(() => VolunteerResponseWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VolunteerResponseWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VolunteerResponseWhereInputSchema),z.lazy(() => VolunteerResponseWhereInputSchema).array() ]).optional(),
  questionId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  responderId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  answer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  importerId: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  submittedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  question: z.union([ z.lazy(() => VolunteerQuestionRelationFilterSchema),z.lazy(() => VolunteerQuestionWhereInputSchema) ]).optional(),
  responder: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  importedBy: z.union([ z.lazy(() => PersonNullableRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional().nullable(),
}).strict());

export default VolunteerResponseWhereUniqueInputSchema;
