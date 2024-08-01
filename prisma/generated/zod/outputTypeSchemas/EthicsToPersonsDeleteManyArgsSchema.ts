import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EthicsToPersonsWhereInputSchema } from '../inputTypeSchemas/EthicsToPersonsWhereInputSchema'

export const EthicsToPersonsDeleteManyArgsSchema: z.ZodType<Prisma.EthicsToPersonsDeleteManyArgs> = z.object({
  where: EthicsToPersonsWhereInputSchema.optional(),
}).strict() ;

export default EthicsToPersonsDeleteManyArgsSchema;
