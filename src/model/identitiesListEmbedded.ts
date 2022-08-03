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
import { Identity } from './identity';

/**
* List of `Identity` resources.
*/
export class IdentitiesListEmbedded {
    /**
    * An `Identity` resource represents either a person or business in Finix.
    */
    'identities'?: Set<Identity>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "identities",
            "baseName": "identities",
            "type": "Set<Identity>"
        }    ];

    static getAttributeTypeMap() {
        return IdentitiesListEmbedded.attributeTypeMap;
    }
}
