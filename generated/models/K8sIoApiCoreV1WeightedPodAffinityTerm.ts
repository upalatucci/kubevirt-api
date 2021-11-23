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

import { K8sIoApiCoreV1PodAffinityTerm } from './K8sIoApiCoreV1PodAffinityTerm';
import { HttpFile } from '../http/http';

/**
* The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)
*/
export class K8sIoApiCoreV1WeightedPodAffinityTerm {
    'podAffinityTerm': K8sIoApiCoreV1PodAffinityTerm;
    /**
    * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
    */
    'weight': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "podAffinityTerm",
            "baseName": "podAffinityTerm",
            "type": "K8sIoApiCoreV1PodAffinityTerm",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return K8sIoApiCoreV1WeightedPodAffinityTerm.attributeTypeMap;
    }

    public constructor() {
    }
}

