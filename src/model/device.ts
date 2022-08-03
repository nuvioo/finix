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
import { DeviceConfigDetails } from './deviceConfigDetails';
import { DeviceLinks } from './deviceLinks';
import { InputDetails } from './inputDetails';

/**
* `Device` resource.
*/
export class Device {
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };
    /**
    * Additional information about device (e.g. self serving terminal).
    */
    'description'?: string | null;
    /**
    * The ID of the resource.
    */
    'id'?: string | null;
    /**
    * Timestamp of when the object was created.
    */
    'createdAt'?: Date;
    /**
    * Timestamp of when the object was last updated.
    */
    'updatedAt'?: Date;
    'configurationDetails'?: DeviceConfigDetails | null;
    /**
    * Details if the `Device` is connected and online.
    */
    'connection'?: string;
    /**
    * Details if the `Device` resource is enabled. Set to **false** to disable the `Device`.
    */
    'enabled'?: boolean;
    /**
    * ID of `Device`.
    */
    'idleMessage'?: string | null;
    'inputDetails'?: InputDetails;
    /**
    * ID of the `Merchant` resource.
    */
    'merchant'?: string;
    /**
    * Details the model of the card reader.
    */
    'model'?: string;
    /**
    * Name of the `Device`.
    */
    'name'?: string;
    /**
    * Serial number of the device.
    */
    'serialNumber'?: string | null;
    'links'?: DeviceLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "configurationDetails",
            "baseName": "configuration_details",
            "type": "DeviceConfigDetails"
        },
        {
            "name": "connection",
            "baseName": "connection",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "idleMessage",
            "baseName": "idle_message",
            "type": "string"
        },
        {
            "name": "inputDetails",
            "baseName": "input_details",
            "type": "InputDetails"
        },
        {
            "name": "merchant",
            "baseName": "merchant",
            "type": "string"
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "serialNumber",
            "baseName": "serial_number",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "_links",
            "type": "DeviceLinks"
        }    ];

    static getAttributeTypeMap() {
        return Device.attributeTypeMap;
    }
}
