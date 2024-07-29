import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicsToPersonsScalarWhereInputSchema } from './EthicsToPersonsScalarWhereInputSchema';
import { EthicsToPersonsUpdateManyMutationInputSchema } from './EthicsToPersonsUpdateManyMutationInputSchema';
import { EthicsToPersonsUncheckedUpdateManyWithoutEthicInputSchema } from './EthicsToPersonsUncheckedUpdateManyWithoutEthicInputSchema';

export const EthicsToPersonsUpdateManyWithWhereWithoutEthicInputSchema: z.ZodType<Prisma.EthicsToPersonsUpdateManyWithWhereWithoutEthicInput> = z.object({
  where: z.lazy(() => EthicsToPersonsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EthicsToPersonsUpdateManyMutationInputSchema),z.lazy(() => EthicsToPersonsUncheckedUpdateManyWithoutEthicInputSchema) ]),
}).strict();

export default EthicsToPersonsUpdateManyWithWhereWithoutEthicInputSchema;
