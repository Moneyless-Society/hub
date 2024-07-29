import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VolunteerQuestionWhereInputSchema } from './VolunteerQuestionWhereInputSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { VolunteerResponseListRelationFilterSchema } from './VolunteerResponseListRelationFilterSchema';
import { VolunteerQuestionEditsListRelationFilterSchema } from './VolunteerQuestionEditsListRelationFilterSchema';

export const VolunteerQuestionWhereUniqueInputSchema: z.ZodType<Prisma.VolunteerQuestionWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => VolunteerQuestionWhereInputSchema),z.lazy(() => VolunteerQuestionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VolunteerQuestionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VolunteerQuestionWhereInputSchema),z.lazy(() => VolunteerQuestionWhereInputSchema).array() ]).optional(),
  text: z.lazy(() => StringNullableListFilterSchema).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  responses: z.lazy(() => VolunteerResponseListRelationFilterSchema).optional(),
  edits: z.lazy(() => VolunteerQuestionEditsListRelationFilterSchema).optional()
}).strict());

export default VolunteerQuestionWhereUniqueInputSchema;
