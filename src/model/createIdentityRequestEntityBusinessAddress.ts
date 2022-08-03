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

/**
* The primary address for the legal entity.
*/
export class CreateIdentityRequestEntityBusinessAddress {
    /**
    * City (max 20 characters).
    */
    'city'?: string;
    /**
    * 3-Letter Country code (e.g. USA).
    */
    'country'?: string;
    /**
    * 2-letter state code.
    */
    'region'?: string;
    /**
    * Second line of the address (max 35 characters).
    */
    'line2'?: string;
    /**
    * First line of the address (max 35 characters).
    */
    'line1'?: string;
    /**
    * Zip or Postal code (max 7 characters).
    */
    'postalCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string"
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string"
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateIdentityRequestEntityBusinessAddress.attributeTypeMap;
    }
}
