/**
 * Finix API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2022-02-01
 * Contact: support@finixpayments.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ApplicationLinksSelf } from './applicationLinksSelf';
import { MerchantLinksApplication } from './merchantLinksApplication';
import { MerchantLinksIdentity } from './merchantLinksIdentity';
import { MerchantLinksVerifications } from './merchantLinksVerifications';
import { PaymentInstrumentLinksAuthorizations } from './paymentInstrumentLinksAuthorizations';
import { PaymentInstrumentLinksTransfers } from './paymentInstrumentLinksTransfers';

/**
* For your convenience, every response includes several URLs which link to resources relevant to the request. You can use these `_links` to make your follow-up requests and quickly access relevant IDs.
*/
export class PaymentInstrumentLinks {
    'application'?: MerchantLinksApplication;
    'authorizations'?: PaymentInstrumentLinksAuthorizations;
    'identity'?: MerchantLinksIdentity;
    'self'?: ApplicationLinksSelf;
    'transfers'?: PaymentInstrumentLinksTransfers;
    'verifications'?: MerchantLinksVerifications;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "application",
            "baseName": "application",
            "type": "MerchantLinksApplication"
        },
        {
            "name": "authorizations",
            "baseName": "authorizations",
            "type": "PaymentInstrumentLinksAuthorizations"
        },
        {
            "name": "identity",
            "baseName": "identity",
            "type": "MerchantLinksIdentity"
        },
        {
            "name": "self",
            "baseName": "self",
            "type": "ApplicationLinksSelf"
        },
        {
            "name": "transfers",
            "baseName": "transfers",
            "type": "PaymentInstrumentLinksTransfers"
        },
        {
            "name": "verifications",
            "baseName": "verifications",
            "type": "MerchantLinksVerifications"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrumentLinks.attributeTypeMap;
    }
}
