import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { IntNullableListFilterSchema } from './IntNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const EthicsToPersonsScalarWhereInputSchema: z.ZodType<Prisma.EthicsToPersonsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EthicsToPersonsScalarWhereInputSchema),z.lazy(() => EthicsToPersonsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EthicsToPersonsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EthicsToPersonsScalarWhereInputSchema),z.lazy(() => EthicsToPersonsScalarWhereInputSchema).array() ]).optional(),
  ethicId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  personId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  ranking: z.lazy(() => IntNullableListFilterSchema).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default EthicsToPersonsScalarWhereInputSchema;
