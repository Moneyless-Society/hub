import { z } from 'zod';

export const AvailabilityScalarFieldEnumSchema = z.enum(['id','personId','start','end','startDate','endDate','status']);

export default AvailabilityScalarFieldEnumSchema;
