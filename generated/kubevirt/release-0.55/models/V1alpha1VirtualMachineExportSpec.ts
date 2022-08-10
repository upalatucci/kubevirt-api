/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    K8sIoApiCoreV1TypedLocalObjectReference,
    K8sIoApiCoreV1TypedLocalObjectReferenceFromJSON,
    K8sIoApiCoreV1TypedLocalObjectReferenceFromJSONTyped,
    K8sIoApiCoreV1TypedLocalObjectReferenceToJSON,
} from './';

/**
 * VirtualMachineExportSpec is the spec for a VirtualMachineExport resource
 * @export
 * @interface V1alpha1VirtualMachineExportSpec
 */
export interface V1alpha1VirtualMachineExportSpec {
    /**
     * 
     * @type {K8sIoApiCoreV1TypedLocalObjectReference}
     * @memberof V1alpha1VirtualMachineExportSpec
     */
    source: K8sIoApiCoreV1TypedLocalObjectReference;
    /**
     * TokenSecretRef is the name of the secret that contains the token used by the export server pod
     * @type {string}
     * @memberof V1alpha1VirtualMachineExportSpec
     */
    tokenSecretRef: string;
}

export function V1alpha1VirtualMachineExportSpecFromJSON(json: any): V1alpha1VirtualMachineExportSpec {
    return V1alpha1VirtualMachineExportSpecFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachineExportSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1VirtualMachineExportSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'source': K8sIoApiCoreV1TypedLocalObjectReferenceFromJSON(json['source']),
        'tokenSecretRef': json['tokenSecretRef'],
    };
}

export function V1alpha1VirtualMachineExportSpecToJSON(value?: V1alpha1VirtualMachineExportSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'source': K8sIoApiCoreV1TypedLocalObjectReferenceToJSON(value.source),
        'tokenSecretRef': value.tokenSecretRef,
    };
}

