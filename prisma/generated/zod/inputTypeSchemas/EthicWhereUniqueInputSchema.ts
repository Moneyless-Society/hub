import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicWhereInputSchema } from './EthicWhereInputSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EthicVersionListRelationFilterSchema } from './EthicVersionListRelationFilterSchema';
import { EthicsToPersonsListRelationFilterSchema } from './EthicsToPersonsListRelationFilterSchema';

export const EthicWhereUniqueInputSchema: z.ZodType<Prisma.EthicWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    shortName: z.string(),
    activeId: z.number().int()
  }),
  z.object({
    id: z.number().int(),
    shortName: z.string(),
  }),
  z.object({
    id: z.number().int(),
    activeId: z.number().int(),
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    shortName: z.string(),
    activeId: z.number().int(),
  }),
  z.object({
    shortName: z.string(),
  }),
  z.object({
    activeId: z.number().int(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  shortName: z.string().optional(),
  activeId: z.number().int().optional(),
  AND: z.union([ z.lazy(() => EthicWhereInputSchema),z.lazy(() => EthicWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EthicWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EthicWhereInputSchema),z.lazy(() => EthicWhereInputSchema).array() ]).optional(),
  coreValue: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  versions: z.lazy(() => EthicVersionListRelationFilterSchema).optional(),
  responses: z.lazy(() => EthicsToPersonsListRelationFilterSchema).optional()
}).strict());

export default EthicWhereUniqueInputSchema;
