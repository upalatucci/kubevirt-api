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

import { V1AccessCredentialSecretSource } from './V1AccessCredentialSecretSource';
import { HttpFile } from '../http/http';

/**
* UserPasswordAccessCredentialSource represents where to retrieve the user password credentials Only one of its members may be specified.
*/
export class V1UserPasswordAccessCredentialSource {
    'secret'?: V1AccessCredentialSecretSource;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "secret",
            "baseName": "secret",
            "type": "V1AccessCredentialSecretSource",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1UserPasswordAccessCredentialSource.attributeTypeMap;
    }

    public constructor() {
    }
}

