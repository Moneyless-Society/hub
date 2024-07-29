import { z } from 'zod';

export const TimeZoneSchema = z.enum(['AC','AET','AFT','AK','ALM','AM','AN','AQT','AR','AS','AW','AZ','BN','BIO','BI','BO','BR','BT','CA','CC','CE','CH','CI','CK','CL','CO','CT','CV','CW','CX','DAV','DDU','EAS','EA','EC','EE','EG','ET','FE','FJ','FK','FN','GA','GAM','GE','GF','GI','GM','GS','GY','HS','HK','HM','HOV','IC','ID','IO','IRK','IS','JS','KA','KG','KO','KRA','KS','LHS','LIN','MAG','MAR','MAW','MT','MH','MIS','MM','MSK','MU','MV','MY','NC','NF','NOV','NP','NS','NU','NZ','OM','OR','PE','PG','PH','PK','PM','PO','PW','PY','RE','ROT','SAK','SAM','SA','SB','SC','SG','SL','SRE','SR','SS','SYO','TAH','TH','TF','TJ','TK','TL','TM','TO','TV','UC','ULA','UTC','UY','UZ','VE','VL','VOL','VO','VU','WAK','WA','WE','WI','WIT','WST','YAK','YE','Z']);

export type TimeZoneType = `${z.infer<typeof TimeZoneSchema>}`

export default TimeZoneSchema;
