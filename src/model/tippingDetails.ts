/**
 * Finix API
 */

export class TippingDetails {
    /**
    * Allows the buyer to set a custom tip. FINIX_V1 and DUMMY_V1 only. (defaults to **true**).
    */
    'allowCustomTip'?: boolean;

    /**
    * Sets the fixed amount that will be displayed on the terminal. Defaults to [100, 150, 200]. Must be three integer values that represent cent values. FINIX_V1 and DUMMY_V1 only.
    */
    'fixedOptions'?: Array<number>;

    /**
    * Sets the percentages that will be displayed on the terminal. Defaults to [18, 20, 22]. Must be three integer values that represent percentages. FINIX_V1 and DUMMY_V1 only.
    */
    'percentOptions'?: Array<number>;

    /**
    * The inclusive value at which the terminal will present a percent based prompt instead of a fixed value prompt. Defaults to false. FINIX_V1 and DUMMY_V1 only.
    */
    'percentTippingThreshold'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowCustomTip",
            "baseName": "allow_custom_tip",
            "type": "boolean"
        },
        {
            "name": "fixedOptions",
            "baseName": "fixed_options",
            "type": "Array<number>"
        },
        {
            "name": "percentOptions",
            "baseName": "percent_options",
            "type": "Array<number>"
        },
        {
            "name": "percentTippingThreshold",
            "baseName": "percent_tipping_threshold",
            "type": "number"
        }
    ];

    static getAttributeTypeMap() {
        return TippingDetails.attributeTypeMap;
    }
}
