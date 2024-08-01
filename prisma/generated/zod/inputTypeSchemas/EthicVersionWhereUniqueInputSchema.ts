import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionWhereInputSchema } from './EthicVersionWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EthicRelationFilterSchema } from './EthicRelationFilterSchema';
import { EthicWhereInputSchema } from './EthicWhereInputSchema';
import { PersonNullableRelationFilterSchema } from './PersonNullableRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { EthicVersionsToPersonsListRelationFilterSchema } from './EthicVersionsToPersonsListRelationFilterSchema';

export const EthicVersionWhereUniqueInputSchema: z.ZodType<Prisma.EthicVersionWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    text: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    text: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  text: z.string().optional(),
  AND: z.union([ z.lazy(() => EthicVersionWhereInputSchema),z.lazy(() => EthicVersionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EthicVersionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EthicVersionWhereInputSchema),z.lazy(() => EthicVersionWhereInputSchema).array() ]).optional(),
  ethicId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  submitterId: z.union([ z.lazy(() => UuidNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  ethic: z.union([ z.lazy(() => EthicRelationFilterSchema),z.lazy(() => EthicWhereInputSchema) ]).optional(),
  submitter: z.union([ z.lazy(() => PersonNullableRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional().nullable(),
  responses: z.lazy(() => EthicVersionsToPersonsListRelationFilterSchema).optional()
}).strict());

export default EthicVersionWhereUniqueInputSchema;
