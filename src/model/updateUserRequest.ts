/**
 * Finix API
 */

import { RequestFile } from './models';

export class UpdateUserRequest {
    /**
    * Details if the `user` is enabled and active. Set to **false** to disable the user.
    */
    'enabled'?: boolean;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return UpdateUserRequest.attributeTypeMap;
    }
}

