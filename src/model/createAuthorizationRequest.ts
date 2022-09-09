/**
 * Finix API
 */

import { RequestFile } from './models';
import { AdditionalBuyerCharges } from './additionalBuyerCharges';
import { AdditionalPurchaseData } from './additionalPurchaseData';
import { CreateAuthorizationRequest3dSecureAuthentication } from './createAuthorizationRequest3dSecureAuthentication';
import { Currency } from './currency';
import { OperationKey } from './operationKey';

/**
* Create an `Authorization` resource.
*/
export class CreateAuthorizationRequest {
    'additionalBuyerCharges'?: AdditionalBuyerCharges | null;
    'additionalPurchaseData'?: AdditionalPurchaseData;
    /**
    * The total amount that will be debited in cents (e.g. 100 cents to debit $1.00).
    */
    'amount': number;
    'currency': Currency;
    /**
    * The ID of the resource.
    */
    'device'?: string | null;
    /**
    * The `fraud_session_session` ID you want to review for fraud. For more info, see [Fraud Detection](/docs/guides/payments/fraud-detection/).
    */
    'fraudSessionId'?: string;
    /**
    * A randomly generated value that\'ll be associated with the request.
    */
    'idempotencyId'?: string | null;
    /**
    * The ID of the resource.
    */
    'merchant'?: string | null;
    'operationKey'?: OperationKey | null;
    /**
    * The ID of the resource.
    */
    'source'?: string | null;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
    '_3dSecureAuthentication'?: CreateAuthorizationRequest3dSecureAuthentication | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalBuyerCharges",
            "baseName": "additional_buyer_charges",
            "type": "AdditionalBuyerCharges"
        },
        {
            "name": "additionalPurchaseData",
            "baseName": "additional_purchase_data",
            "type": "AdditionalPurchaseData"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "Currency"
        },
        {
            "name": "device",
            "baseName": "device",
            "type": "string"
        },
        {
            "name": "fraudSessionId",
            "baseName": "fraud_session_id",
            "type": "string"
        },
        {
            "name": "idempotencyId",
            "baseName": "idempotency_id",
            "type": "string"
        },
        {
            "name": "merchant",
            "baseName": "merchant",
            "type": "string"
        },
        {
            "name": "operationKey",
            "baseName": "operation_key",
            "type": "OperationKey"
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "_3dSecureAuthentication",
            "baseName": "3d_secure_authentication",
            "type": "CreateAuthorizationRequest3dSecureAuthentication"
        }    ];

    static getAttributeTypeMap() {
        return CreateAuthorizationRequest.attributeTypeMap;
    }
}

