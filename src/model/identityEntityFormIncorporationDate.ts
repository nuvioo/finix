/**
 * Finix API
 */

import { RequestFile } from './models';

/**
* Date company was founded.
*/
export class IdentityEntityFormIncorporationDate {
    /**
    * Year business was incorporated (4-digit).
    */
    'year'?: number;
    /**
    * Day business was incorporated (between 1 and 31).
    */
    'day'?: number;
    /**
    * Month business was incorporated (between 1 and 12).
    */
    'month'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "year",
            "baseName": "year",
            "type": "number"
        },
        {
            "name": "day",
            "baseName": "day",
            "type": "number"
        },
        {
            "name": "month",
            "baseName": "month",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IdentityEntityFormIncorporationDate.attributeTypeMap;
    }
}

