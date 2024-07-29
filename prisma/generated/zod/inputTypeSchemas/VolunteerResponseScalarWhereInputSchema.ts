import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const VolunteerResponseScalarWhereInputSchema: z.ZodType<Prisma.VolunteerResponseScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => VolunteerResponseScalarWhereInputSchema),z.lazy(() => VolunteerResponseScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => VolunteerResponseScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => VolunteerResponseScalarWhereInputSchema),z.lazy(() => VolunteerResponseScalarWhereInputSchema).array() ]).optional(),
  questionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  responderId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  answer: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  importerId: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  submittedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
}).strict();

export default VolunteerResponseScalarWhereInputSchema;
