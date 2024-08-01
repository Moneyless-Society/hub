import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { VolunteerResponseListRelationFilterSchema } from './VolunteerResponseListRelationFilterSchema';
import { VolunteerQuestionEditsListRelationFilterSchema } from './VolunteerQuestionEditsListRelationFilterSchema';

export const VolunteerQuestionWhereInputSchema: z.ZodType<Prisma.VolunteerQuestionWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VolunteerQuestionWhereInputSchema),z.lazy(() => VolunteerQuestionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VolunteerQuestionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VolunteerQuestionWhereInputSchema),z.lazy(() => VolunteerQuestionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  text: z.lazy(() => StringNullableListFilterSchema).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  responses: z.lazy(() => VolunteerResponseListRelationFilterSchema).optional(),
  edits: z.lazy(() => VolunteerQuestionEditsListRelationFilterSchema).optional()
}).strict();

export default VolunteerQuestionWhereInputSchema;
