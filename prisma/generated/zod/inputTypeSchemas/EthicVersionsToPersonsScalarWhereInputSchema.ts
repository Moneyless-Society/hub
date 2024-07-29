import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const EthicVersionsToPersonsScalarWhereInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EthicVersionsToPersonsScalarWhereInputSchema),z.lazy(() => EthicVersionsToPersonsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EthicVersionsToPersonsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EthicVersionsToPersonsScalarWhereInputSchema),z.lazy(() => EthicVersionsToPersonsScalarWhereInputSchema).array() ]).optional(),
  ethicVersionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  personId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  consent: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  commentary: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default EthicVersionsToPersonsScalarWhereInputSchema;
