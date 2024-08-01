import { z } from 'zod';

export const SessionScalarFieldEnumSchema = z.enum(['id','sessionToken','expires','userId']);

export default SessionScalarFieldEnumSchema;
