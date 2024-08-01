import { z } from 'zod';

export const EthicVersionsToPersonsScalarFieldEnumSchema = z.enum(['ethicVersionId','personId','consent','commentary']);

export default EthicVersionsToPersonsScalarFieldEnumSchema;
