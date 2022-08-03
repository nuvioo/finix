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
import { Error404NotFoundListEmbedded } from './error404NotFoundListEmbedded';

export class Error406NotAcceptable {
    'total'?: number;
    'embedded'?: Error404NotFoundListEmbedded;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        },
        {
            "name": "embedded",
            "baseName": "_embedded",
            "type": "Error404NotFoundListEmbedded"
        }    ];

    static getAttributeTypeMap() {
        return Error406NotAcceptable.attributeTypeMap;
    }
}
