import { z } from 'zod';

export const EthicsToPersonsScalarFieldEnumSchema = z.enum(['ethicId','personId','ranking','updatedAt']);

export default EthicsToPersonsScalarFieldEnumSchema;
