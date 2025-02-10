/**
 * Finix API
 */

// @ts-ignore
import { RequestFile } from './models';
import { TippingDetails } from './tippingDetails';

/**
* Configure the details of the activated device.
*/
export class ConfigurationDetails {
    /**
    * Enable processing of transactions through Debit rails. If set to false, Debit card transactions will instead be processed through Credit rails. (defaults to **true**).
    */
    'allowDebit'?: boolean;

    /**
    * Sets whether the device allows initialization authorizations on its interface. FINIX_V1 and DUMMY_V1 only. (defaults to **false**).
    */
    'allowStandaloneAuthorizations'?: boolean;

    /**
    * Sets whether the device allows initialization sales on its interface. (defaults to **false**).
    */
    'allowStandaloneSales'?: boolean;

    /**
    * Sets whether the device allows initialization refunds on its interface. FINIX_V1 and DUMMY_V1 only. (defaults to **false**).
    */
    'allowStandaloneRefunds'?: boolean;

    /**
    * Sets whether or not the device will be used to capture transactions. This field should be set to true unless there are special circumstances. (defaults to **false**).
    */
    'bypassDeviceOnCapture'?: boolean | null;

    /**
    * Sets whether the device will display the blank tip amount on the receipt for authorizations to be later captured. FINIX_V1 and DUMMY_V1 only. (defaults to **false**).
    */
    'displayTipOnReceipt'?: boolean;

    /**
    * Sets whether or not the device presents a screen prompting the buyer to print receipt at the end of the transaction flow. FINIX_V1 and DUMMY_V1 only. (defaults to **true**).
    */
    'promptReceiptConfirmation'?: boolean;

    /**
    * Sets whether the device will display the suggested tipping screen. FINIX_V1 and DUMMY_V1 only. (defaults to **false**).
    */
    'promptTipOnScreen'?: boolean;

    /**
    * An object that sets the configurations for the tipping page if it appears. FINIX_V1 and DUMMY_V1 only.
    */
    'tippingDetails'?: TippingDetails;

    /**
    * Represents the transaction amount that a Merchant charges the buyer when creating a Transfer or an Authorization. The value cannot exceed 300 (i.e., 3%). For devices on Standalone Mode, the Finix Payment Application on the terminal will calculate and send a Transfer or an Authorization request with the surcharge added. Customers integrated directly into Finix API must contact Support to incorporate surcharging appropriately into their integration. (defaults to **0**).
    */
    'surchargeBasisPoints'?: number;

    /**
    * Sets whether the device will check for duplicate transactions.
    */
    'checkForDuplicateTransactions'?: boolean;

    /**
    * Sets if the card holder needs to confirm the amount they will pay (defaults to **true**).
    */
    'promptAmountConfirmation'?: boolean;

    /**
    * Sets if the device defaults to manual entry as the default card input method. (defaults to **false**).
    */
    'promptManualEntry'?: boolean;

    /**
    * Sets whether the device will prompt the card holder for a signature by default. Available values include:
    * - ALWAYS
    * - NEVER
    * - AMOUNT: Used in conjunction with `signature_threshold_amount` so when the threshold is reached the signature form appears on the device.
    */
    'promptSignature'?: string;

    /**
    * The threshold to prompt a signature when `prompt_signature` is set to **AMOUNT** (defaults to 0).
    */
    'signatureThresholdAmount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "allowDebit",
            "baseName": "allow_debit",
            "type": "boolean"
        },
        {
            "name": "allowStandaloneAuthorizations",
            "baseName": "allow_standalone_authorizations",
            "type": "boolean"
        },
        {
            "name": "allowStandaloneSales",
            "baseName": "allow_standalone_sales",
            "type": "boolean"
        },
        {
            "name": "allowStandaloneRefunds",
            "baseName": "allow_standalone_refunds",
            "type": "boolean"
        },
        {
            "name": "bypassDeviceOnCapture",
            "baseName": "bypass_device_on_capture",
            "type": "boolean"
        },
        {
            "name": "checkForDuplicateTransactions",
            "baseName": "check_for_duplicate_transactions",
            "type": "boolean"
        },
        {
            "name": "displayTipOnReceipt",
            "baseName": "display_tip_on_receipt",
            "type": "boolean"
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
            "name": "promptReceiptConfirmation",
            "baseName": "prompt_receipt_confirmation",
            "type": "boolean"
        },
        {
            "name": "promptTipOnScreen",
            "baseName": "prompt_tip_on_screen",
            "type": "boolean"
        },
        {
            "name": "tippingDetails",
            "baseName": "tipping_details",
            "type": "TippingDetails"
        },
        {
            "name": "surchargeBasisPoints",
            "baseName": "surcharge_basis_points",
            "type": "number"
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
        }];

    static getAttributeTypeMap() {
        return ConfigurationDetails.attributeTypeMap;
    }
}
