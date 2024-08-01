import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RoleTermCreateManyHolderInputSchema } from './RoleTermCreateManyHolderInputSchema';

export const RoleTermCreateManyHolderInputEnvelopeSchema: z.ZodType<Prisma.RoleTermCreateManyHolderInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => RoleTermCreateManyHolderInputSchema),z.lazy(() => RoleTermCreateManyHolderInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default RoleTermCreateManyHolderInputEnvelopeSchema;
