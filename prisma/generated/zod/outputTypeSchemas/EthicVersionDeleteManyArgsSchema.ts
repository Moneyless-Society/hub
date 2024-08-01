import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionWhereInputSchema } from '../inputTypeSchemas/EthicVersionWhereInputSchema'

export const EthicVersionDeleteManyArgsSchema: z.ZodType<Prisma.EthicVersionDeleteManyArgs> = z.object({
  where: EthicVersionWhereInputSchema.optional(),
}).strict() ;

export default EthicVersionDeleteManyArgsSchema;
