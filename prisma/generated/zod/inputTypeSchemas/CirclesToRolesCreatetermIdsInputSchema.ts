import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CirclesToRolesCreatetermIdsInputSchema: z.ZodType<Prisma.CirclesToRolesCreatetermIdsInput> = z.object({
  set: z.number().array()
}).strict();

export default CirclesToRolesCreatetermIdsInputSchema;
