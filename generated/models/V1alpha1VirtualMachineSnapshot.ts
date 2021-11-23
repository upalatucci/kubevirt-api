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

import { K8sIoApimachineryPkgApisMetaV1ObjectMeta } from './K8sIoApimachineryPkgApisMetaV1ObjectMeta';
import { V1alpha1VirtualMachineSnapshotSpec } from './V1alpha1VirtualMachineSnapshotSpec';
import { V1alpha1VirtualMachineSnapshotStatus } from './V1alpha1VirtualMachineSnapshotStatus';
import { HttpFile } from '../http/http';

/**
* VirtualMachineSnapshot defines the operation of snapshotting a VM
*/
export class V1alpha1VirtualMachineSnapshot {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata'?: K8sIoApimachineryPkgApisMetaV1ObjectMeta;
    'spec': V1alpha1VirtualMachineSnapshotSpec;
    'status'?: V1alpha1VirtualMachineSnapshotStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string",
            "format": ""
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "K8sIoApimachineryPkgApisMetaV1ObjectMeta",
            "format": ""
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "V1alpha1VirtualMachineSnapshotSpec",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V1alpha1VirtualMachineSnapshotStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1VirtualMachineSnapshot.attributeTypeMap;
    }

    public constructor() {
    }
}

