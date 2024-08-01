import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionsToPersonsEthicVersionIdPersonIdCompoundUniqueInputSchema } from './EthicVersionsToPersonsEthicVersionIdPersonIdCompoundUniqueInputSchema';
import { EthicVersionsToPersonsWhereInputSchema } from './EthicVersionsToPersonsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EthicVersionRelationFilterSchema } from './EthicVersionRelationFilterSchema';
import { EthicVersionWhereInputSchema } from './EthicVersionWhereInputSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const EthicVersionsToPersonsWhereUniqueInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsWhereUniqueInput> = z.object({
  ethicVersionId_personId: z.lazy(() => EthicVersionsToPersonsEthicVersionIdPersonIdCompoundUniqueInputSchema)
})
.and(z.object({
  ethicVersionId_personId: z.lazy(() => EthicVersionsToPersonsEthicVersionIdPersonIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => EthicVersionsToPersonsWhereInputSchema),z.lazy(() => EthicVersionsToPersonsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EthicVersionsToPersonsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EthicVersionsToPersonsWhereInputSchema),z.lazy(() => EthicVersionsToPersonsWhereInputSchema).array() ]).optional(),
  ethicVersionId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  personId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  consent: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  commentary: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  ethicVersion: z.union([ z.lazy(() => EthicVersionRelationFilterSchema),z.lazy(() => EthicVersionWhereInputSchema) ]).optional(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
}).strict());

export default EthicVersionsToPersonsWhereUniqueInputSchema;
