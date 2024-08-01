import { z } from 'zod';

export const EthicScalarFieldEnumSchema = z.enum(['id','shortName','activeId','coreValue']);

export default EthicScalarFieldEnumSchema;
