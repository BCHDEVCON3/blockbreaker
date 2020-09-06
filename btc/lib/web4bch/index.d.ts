import getAddress from './methods/getAddress';
import sendAssets from './methods/sendAssets';
import payInvoice from './methods/payInvoice';
import createToken from './methods/createToken';
import linkPing from './methods/linkPing';
import requestValue from './methods/requestValue';
import { WalletProviderStatus } from '../constants';
export declare function hasWeb4BchProvider(): boolean;
export declare function getBadgerStatus(): WalletProviderStatus;
declare const _default: {
    getAddress: typeof getAddress;
    sendAssets: typeof sendAssets;
    payInvoice: typeof payInvoice;
    createToken: typeof createToken;
    linkPing: typeof linkPing;
    requestValue: typeof requestValue;
};
export default _default;
//# sourceMappingURL=index.d.ts.map