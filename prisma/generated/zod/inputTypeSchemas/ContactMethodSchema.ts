import { z } from 'zod';

export const ContactMethodSchema = z.enum(['DISCORD','EMAIL','PHONE_CALL','SIGNAL','SLACK','TEXT']);

export type ContactMethodType = `${z.infer<typeof ContactMethodSchema>}`

export default ContactMethodSchema;
