import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicWhereInputSchema } from '../inputTypeSchemas/EthicWhereInputSchema'

export const EthicDeleteManyArgsSchema: z.ZodType<Prisma.EthicDeleteManyArgs> = z.object({
  where: EthicWhereInputSchema.optional(),
}).strict() ;

export default EthicDeleteManyArgsSchema;
