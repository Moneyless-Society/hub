import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsEthicIdPersonIdCompoundUniqueInputSchema } from './EthicsToPersonsEthicIdPersonIdCompoundUniqueInputSchema';
import { EthicsToPersonsWhereInputSchema } from './EthicsToPersonsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { UuidFilterSchema } from './UuidFilterSchema';
import { IntNullableListFilterSchema } from './IntNullableListFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { EthicRelationFilterSchema } from './EthicRelationFilterSchema';
import { EthicWhereInputSchema } from './EthicWhereInputSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';

export const EthicsToPersonsWhereUniqueInputSchema: z.ZodType<Prisma.EthicsToPersonsWhereUniqueInput> = z.object({
  ethicId_personId: z.lazy(() => EthicsToPersonsEthicIdPersonIdCompoundUniqueInputSchema)
})
.and(z.object({
  ethicId_personId: z.lazy(() => EthicsToPersonsEthicIdPersonIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => EthicsToPersonsWhereInputSchema),z.lazy(() => EthicsToPersonsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EthicsToPersonsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EthicsToPersonsWhereInputSchema),z.lazy(() => EthicsToPersonsWhereInputSchema).array() ]).optional(),
  ethicId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  personId: z.union([ z.lazy(() => UuidFilterSchema),z.string() ]).optional(),
  ranking: z.lazy(() => IntNullableListFilterSchema).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  ethic: z.union([ z.lazy(() => EthicRelationFilterSchema),z.lazy(() => EthicWhereInputSchema) ]).optional(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
}).strict());

export default EthicsToPersonsWhereUniqueInputSchema;
