import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CirclesToRolesCreateManyInputSchema } from '../inputTypeSchemas/CirclesToRolesCreateManyInputSchema'

export const CirclesToRolesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CirclesToRolesCreateManyAndReturnArgs> = z.object({
  data: z.union([ CirclesToRolesCreateManyInputSchema,CirclesToRolesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default CirclesToRolesCreateManyAndReturnArgsSchema;
