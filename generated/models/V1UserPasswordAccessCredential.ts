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

import { V1UserPasswordAccessCredentialPropagationMethod } from './V1UserPasswordAccessCredentialPropagationMethod';
import { V1UserPasswordAccessCredentialSource } from './V1UserPasswordAccessCredentialSource';
import { HttpFile } from '../http/http';

/**
* UserPasswordAccessCredential represents a source and propagation method for injecting user passwords into a vm guest Only one of its members may be specified.
*/
export class V1UserPasswordAccessCredential {
    'propagationMethod': V1UserPasswordAccessCredentialPropagationMethod;
    'source': V1UserPasswordAccessCredentialSource;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "propagationMethod",
            "baseName": "propagationMethod",
            "type": "V1UserPasswordAccessCredentialPropagationMethod",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "V1UserPasswordAccessCredentialSource",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1UserPasswordAccessCredential.attributeTypeMap;
    }

    public constructor() {
    }
}

