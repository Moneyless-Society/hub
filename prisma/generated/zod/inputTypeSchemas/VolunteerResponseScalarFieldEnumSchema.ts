import { z } from 'zod';

export const VolunteerResponseScalarFieldEnumSchema = z.enum(['questionId','responderId','answer','updatedAt','importerId','createdAt','submittedAt']);

export default VolunteerResponseScalarFieldEnumSchema;
