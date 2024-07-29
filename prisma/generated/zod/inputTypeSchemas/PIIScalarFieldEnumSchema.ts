import { z } from 'zod';

export const PIIScalarFieldEnumSchema = z.enum(['id','personId','legalFirstName','legalLastName','address','phoneNumber','discord','createdAt','updatedAt']);

export default PIIScalarFieldEnumSchema;
