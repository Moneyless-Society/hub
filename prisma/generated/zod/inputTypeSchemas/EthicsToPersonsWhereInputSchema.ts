import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { IntNullableListFilterSchema } from './IntNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EthicRelationFilterSchema } from './EthicRelationFilterSchema';
import { EthicWhereInputSchema } from './EthicWhereInputSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const EthicsToPersonsWhereInputSchema: z.ZodType<Prisma.EthicsToPersonsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EthicsToPersonsWhereInputSchema),z.lazy(() => EthicsToPersonsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EthicsToPersonsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EthicsToPersonsWhereInputSchema),z.lazy(() => EthicsToPersonsWhereInputSchema).array() ]).optional(),
  ethicId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  personId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  ranking: z.lazy(() => IntNullableListFilterSchema).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  ethic: z.union([ z.lazy(() => EthicRelationFilterSchema),z.lazy(() => EthicWhereInputSchema) ]).optional(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
}).strict();

export default EthicsToPersonsWhereInputSchema;
