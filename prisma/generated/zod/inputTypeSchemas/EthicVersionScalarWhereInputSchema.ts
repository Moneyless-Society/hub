import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const EthicVersionScalarWhereInputSchema: z.ZodType<Prisma.EthicVersionScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EthicVersionScalarWhereInputSchema),z.lazy(() => EthicVersionScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EthicVersionScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EthicVersionScalarWhereInputSchema),z.lazy(() => EthicVersionScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  text: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ethicId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  submitterId: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default EthicVersionScalarWhereInputSchema;
