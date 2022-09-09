/**
 * Finix API
 */

import { RequestFile } from './models';
import { ConfigurationDetailsCashbackOptions } from './configurationDetailsCashbackOptions';
import { ConfigurationDetailsTipOptions } from './configurationDetailsTipOptions';

/**
* Configure the details of the activated device.
*/
export class ConfigurationDetails {
    /**
    * Allow transaction to be processed on Debit rails. If `false`, Debit card transactions will be processed on Credit rails.
    */
    'allowDebit'?: boolean;
    /**
    * Determines if a transaction can be partially approved (Usually **null**).
    */
    'allowPartialApprovals'?: boolean;
    /**
    * Sets whether the device will be used to capture `Authorizations`. The device is required to be connected if `bypass_device_on_capture` is set to false. (defaults to true).
    */
    'bypassDeviceOnCapture'?: boolean;
    'cashbackOptions'?: ConfigurationDetailsCashbackOptions;
    /**
    * Sets whether the device will check for duplicate transactions.
    */
    'checkForDuplicateTransactions'?: boolean;
    /**
    * Sets whether the device will allow cash back.
    */
    'isCashBackAllowed'?: boolean;
    /**
    * Sets whether the device will allow gifting funds.
    */
    'isGiftSupported'?: string;
    /**
    * Sets whether the device will process payment details entered manually.
    */
    'isManualEntryAllowed'?: boolean;
    /**
    * Used by the processor to handle the `transfer`. Usually **null**.
    */
    'marketCode'?: string;
    /**
    * Sets if the card holder needs to confirm the amount they will pay (defaults to **true**).
    */
    'promptAmountConfirmation'?: boolean;
    /**
    * Sets if the device defaults to manual entry as the default card input method. (defaults to **false**).
    */
    'promptManualEntry'?: boolean;
    /**
    * Sets if the device will prompt the card holder for a signature by default. Available values include:<ul><li><strong>ALWAYS</strong><li><strong>NEVER</strong><li><strong>AMOUNT</strong>: Used in conjunction with `signature_threshold_amount` so when the threshold is reached the signature form appears on the device.
    */
    'promptSignature'?: string;
    /**
    * The threshold to prompt a signature when `prompt_signature` is set to **AMOUNT** (defaults to 0).
    */
    'signatureThresholdAmount'?: number;
    'tipOptions'?: ConfigurationDetailsTipOptions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowDebit",
            "baseName": "allow_debit",
            "type": "boolean"
        },
        {
            "name": "allowPartialApprovals",
            "baseName": "allow_partial_approvals",
            "type": "boolean"
        },
        {
            "name": "bypassDeviceOnCapture",
            "baseName": "bypass_device_on_capture",
            "type": "boolean"
        },
        {
            "name": "cashbackOptions",
            "baseName": "cashback_options",
            "type": "ConfigurationDetailsCashbackOptions"
        },
        {
            "name": "checkForDuplicateTransactions",
            "baseName": "check_for_duplicate_transactions",
            "type": "boolean"
        },
        {
            "name": "isCashBackAllowed",
            "baseName": "is_cash_back_allowed",
            "type": "boolean"
        },
        {
            "name": "isGiftSupported",
            "baseName": "is_gift_supported",
            "type": "string"
        },
        {
            "name": "isManualEntryAllowed",
            "baseName": "is_manual_entry_allowed",
            "type": "boolean"
        },
        {
            "name": "marketCode",
            "baseName": "market_code",
            "type": "string"
        },
        {
            "name": "promptAmountConfirmation",
            "baseName": "prompt_amount_confirmation",
            "type": "boolean"
        },
        {
            "name": "promptManualEntry",
            "baseName": "prompt_manual_entry",
            "type": "boolean"
        },
        {
            "name": "promptSignature",
            "baseName": "prompt_signature",
            "type": "string"
        },
        {
            "name": "signatureThresholdAmount",
            "baseName": "signature_threshold_amount",
            "type": "number"
        },
        {
            "name": "tipOptions",
            "baseName": "tip_options",
            "type": "ConfigurationDetailsTipOptions"
        }    ];

    static getAttributeTypeMap() {
        return ConfigurationDetails.attributeTypeMap;
    }
}

