/**
 * Finix API
 */

import { RequestFile } from './models';
import { ComplianceFormFiles } from './complianceFormFiles';
import { ComplianceFormPciSaqA } from './complianceFormPciSaqA';

export class ComplianceForm {
    /**
    * ID of the `compliance_form`.
    */
    'id'?: string;
    /**
    * Type of `compliance_form`. There is one available value: **PCI_SAQ_A**.
    */
    'type'?: ComplianceForm.TypeEnum | string;
    /**
    * The state of the `compliance_form`.
    */
    'state'?: ComplianceForm.StateEnum | string;
    /**
    * Timestamp of when the object was created.
    */
    'createdAt'?: Date;
    /**
    * Timestamp of when the object was last updated.
    */
    'updatedAt'?: Date;
    /**
    * Timestamp of when the `compliance_form` must be completed by.
    */
    'dueAt'?: Date;
    /**
    * The ID of the `merchant` linked to the `compliance_form`.
    */
    'linkedTo'?: string;
    /**
    * The type of resource this `compliance_form` is linked to.
    */
    'linkedType'?: string;
    'pciSaqA'?: ComplianceFormPciSaqA;
    'files'?: ComplianceFormFiles;
    /**
    * Timestamp of when the `compliance_form` becomes active and valid.
    */
    'validFrom'?: Date;
    /**
    * Timestamp of when the `compliance_form` is no longer active and valid.
    */
    'validUntil'?: string;
    /**
    * Template linked to this `compliance_form`.
    */
    'complianceFormTemplate'?: string;
    /**
    * Key value pair for annotating custom meta data (e.g. order numbers).
    */
    'tags'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ComplianceForm.TypeEnum"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "ComplianceForm.StateEnum"
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
            "name": "dueAt",
            "baseName": "due_at",
            "type": "Date"
        },
        {
            "name": "linkedTo",
            "baseName": "linked_to",
            "type": "string"
        },
        {
            "name": "linkedType",
            "baseName": "linked_type",
            "type": "string"
        },
        {
            "name": "pciSaqA",
            "baseName": "pci_saq_a",
            "type": "ComplianceFormPciSaqA"
        },
        {
            "name": "files",
            "baseName": "files",
            "type": "ComplianceFormFiles"
        },
        {
            "name": "validFrom",
            "baseName": "valid_from",
            "type": "Date"
        },
        {
            "name": "validUntil",
            "baseName": "valid_until",
            "type": "string"
        },
        {
            "name": "complianceFormTemplate",
            "baseName": "compliance_form_template",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return ComplianceForm.attributeTypeMap;
    }
}

export namespace ComplianceForm {
    export enum TypeEnum {
        PciSaqA = <any> 'PCI_SAQ_A'
    }
    export enum StateEnum {
        Pending = <any> 'PENDING',
        Completed = <any> 'COMPLETED',
        Invalid = <any> 'INVALID',
        Incomplete = <any> 'INCOMPLETE'
    }
}
