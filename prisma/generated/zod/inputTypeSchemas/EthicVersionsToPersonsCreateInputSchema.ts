import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { EthicVersionCreateNestedOneWithoutResponsesInputSchema } from './EthicVersionCreateNestedOneWithoutResponsesInputSchema';
import { PersonCreateNestedOneWithoutValueResponsesInputSchema } from './PersonCreateNestedOneWithoutValueResponsesInputSchema';

export const EthicVersionsToPersonsCreateInputSchema: z.ZodType<Prisma.EthicVersionsToPersonsCreateInput> = z.object({
  consent: z.boolean().optional(),
  commentary: z.string().optional().nullable(),
  ethicVersion: z.lazy(() => EthicVersionCreateNestedOneWithoutResponsesInputSchema),
  person: z.lazy(() => PersonCreateNestedOneWithoutValueResponsesInputSchema)
}).strict();

export default EthicVersionsToPersonsCreateInputSchema;
