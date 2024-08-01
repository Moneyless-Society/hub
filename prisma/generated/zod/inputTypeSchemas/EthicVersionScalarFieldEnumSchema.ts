import { z } from 'zod';

export const EthicVersionScalarFieldEnumSchema = z.enum(['id','text','ethicId','submitterId','createdAt','updatedAt']);

export default EthicVersionScalarFieldEnumSchema;
