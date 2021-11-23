/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* MediatedHostDevice represents a host mediated device allowed for passthrough
*/
export class V1MediatedHostDevice {
    'externalResourceProvider'?: boolean;
    'mdevNameSelector': string;
    'resourceName': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "externalResourceProvider",
            "baseName": "externalResourceProvider",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "mdevNameSelector",
            "baseName": "mdevNameSelector",
            "type": "string",
            "format": ""
        },
        {
            "name": "resourceName",
            "baseName": "resourceName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1MediatedHostDevice.attributeTypeMap;
    }

    public constructor() {
    }
}

