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

export class ListPaymentInstrumentsQueryParams {
    /**
    * The numbers of items to return
    */
    'limit'?: number;
    /**
    * Return every resource created after the cursor value.
    */
    'afterCursor'?: string;
    /**
    * Filter by the last 4 digits of the account if available.
    */
    'accountLast4'?: string;
    /**
    * Filter by the account routing number if available.
    */
    'accountRoutingNumber'?: string;
    /**
    * Filter by application id
    */
    'application'?: string;
    /**
    * Filter by Bank Identification Number (BIN). The BIN is the first 6 digits of the masked number
    */
    'bin'?: string;
    /**
    * Filter where created_at is after the given date.
    */
    'createdAtGte'?: string;
    /**
    * Filter where created_at is before the given date.
    */
    'createdAtLte'?: string;
    /**
    * Filter by the expiration month associated with the `Payment Instrument` if applicable. This filter only applies to payment cards.
    */
    'expirationMonth'?: string;
    /**
    * Filter by the 4 digit expiration year associated with the Payment Instrument if applicable. This filter only applies to payment cards
    */
    'expirationYear'?: string;
    /**
    * Filter by the last 4 digits of the Payment Instrument card. This filter only applies to payment cards.
    */
    'lastFour'?: string;
    /**
    * Filter by the name.
    */
    'name'?: string;
    /**
    * Filter by the owner id of the associated identity.
    */
    'ownerIdentityId'?: string;
    /**
    * Filter by the payment instrument type.
    */
    'type'?: string;
    /**
    * Return every resource created before the cursor value.
    */
    'beforeCursor'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "afterCursor",
            "baseName": "after_cursor",
            "type": "string"
        },
        {
            "name": "accountLast4",
            "baseName": "account_last4",
            "type": "string"
        },
        {
            "name": "accountRoutingNumber",
            "baseName": "account_routing_number",
            "type": "string"
        },
        {
            "name": "application",
            "baseName": "application",
            "type": "string"
        },
        {
            "name": "bin",
            "baseName": "bin",
            "type": "string"
        },
        {
            "name": "createdAtGte",
            "baseName": "created_at.gte",
            "type": "string"
        },
        {
            "name": "createdAtLte",
            "baseName": "created_at.lte",
            "type": "string"
        },
        {
            "name": "expirationMonth",
            "baseName": "expiration_month",
            "type": "string"
        },
        {
            "name": "expirationYear",
            "baseName": "expiration_year",
            "type": "string"
        },
        {
            "name": "lastFour",
            "baseName": "last_four",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "ownerIdentityId",
            "baseName": "owner_identity_id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "beforeCursor",
            "baseName": "before_cursor",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ListPaymentInstrumentsQueryParams.attributeTypeMap;
    }
}
