import { z } from 'zod';

/////////////////////////////////////////
// AVAILABILITY SCHEMA
/////////////////////////////////////////

/**
 * Start and end times represent milliseconds from beginning of week
 */
export const AvailabilitySchema = z.object({
  id: z.number().int(),
  personId: z.string(),
  start: z.number().int(),
  end: z.number().int(),
  startDate: z.coerce.date().nullable(),
  endDate: z.coerce.date().nullable(),
  status: z.string().nullable(),
})

export type Availability = z.infer<typeof AvailabilitySchema>

export default AvailabilitySchema;
