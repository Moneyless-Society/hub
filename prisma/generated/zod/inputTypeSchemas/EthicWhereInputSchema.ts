import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EthicVersionListRelationFilterSchema } from './EthicVersionListRelationFilterSchema';
import { EthicsToPersonsListRelationFilterSchema } from './EthicsToPersonsListRelationFilterSchema';

export const EthicWhereInputSchema: z.ZodType<Prisma.EthicWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EthicWhereInputSchema),z.lazy(() => EthicWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EthicWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EthicWhereInputSchema),z.lazy(() => EthicWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  shortName: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  activeId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  coreValue: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  versions: z.lazy(() => EthicVersionListRelationFilterSchema).optional(),
  responses: z.lazy(() => EthicsToPersonsListRelationFilterSchema).optional()
}).strict();

export default EthicWhereInputSchema;
