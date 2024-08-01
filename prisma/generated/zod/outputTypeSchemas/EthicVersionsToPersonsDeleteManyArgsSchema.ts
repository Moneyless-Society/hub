import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicVersionsToPersonsWhereInputSchema } from '../inputTypeSchemas/EthicVersionsToPersonsWhereInputSchema'

export const EthicVersionsToPersonsDeleteManyArgsSchema: z.ZodType<Prisma.EthicVersionsToPersonsDeleteManyArgs> = z.object({
  where: EthicVersionsToPersonsWhereInputSchema.optional(),
}).strict() ;

export default EthicVersionsToPersonsDeleteManyArgsSchema;
