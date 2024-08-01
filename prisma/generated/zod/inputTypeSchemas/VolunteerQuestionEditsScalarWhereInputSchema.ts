import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const VolunteerQuestionEditsScalarWhereInputSchema: z.ZodType<Prisma.VolunteerQuestionEditsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VolunteerQuestionEditsScalarWhereInputSchema),z.lazy(() => VolunteerQuestionEditsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VolunteerQuestionEditsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VolunteerQuestionEditsScalarWhereInputSchema),z.lazy(() => VolunteerQuestionEditsScalarWhereInputSchema).array() ]).optional(),
  questionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  editorId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default VolunteerQuestionEditsScalarWhereInputSchema;
