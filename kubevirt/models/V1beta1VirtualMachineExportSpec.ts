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

import { exists } from '../runtime';
import {
  K8sIoApiCoreV1TypedLocalObjectReference,
  K8sIoApiCoreV1TypedLocalObjectReferenceFromJSON,
  K8sIoApiCoreV1TypedLocalObjectReferenceToJSON,
} from './';

/**
 * VirtualMachineExportSpec is the spec for a VirtualMachineExport resource
 * @export
 * @interface V1beta1VirtualMachineExportSpec
 */
export interface V1beta1VirtualMachineExportSpec {
  /**
   *
   * @type {K8sIoApiCoreV1TypedLocalObjectReference}
   * @memberof V1beta1VirtualMachineExportSpec
   */
  source: K8sIoApiCoreV1TypedLocalObjectReference;
  /**
   * TokenSecretRef is the name of the custom-defined secret that contains the token used by the export server pod
   * @type {string}
   * @memberof V1beta1VirtualMachineExportSpec
   */
  tokenSecretRef?: string;
  /**
   * Duration is a wrapper around time.Duration which supports correct marshaling to YAML and JSON. In particular, it marshals into strings, which can be used as map keys in json.
   * @type {string}
   * @memberof V1beta1VirtualMachineExportSpec
   */
  ttlDuration?: string;
}

export function V1beta1VirtualMachineExportSpecFromJSON(
  json: any,
): V1beta1VirtualMachineExportSpec {
  return V1beta1VirtualMachineExportSpecFromJSONTyped(json, false);
}

export function V1beta1VirtualMachineExportSpecFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1beta1VirtualMachineExportSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    source: K8sIoApiCoreV1TypedLocalObjectReferenceFromJSON(json['source']),
    tokenSecretRef: !exists(json, 'tokenSecretRef') ? undefined : json['tokenSecretRef'],
    ttlDuration: !exists(json, 'ttlDuration') ? undefined : json['ttlDuration'],
  };
}

export function V1beta1VirtualMachineExportSpecToJSON(
  value?: V1beta1VirtualMachineExportSpec | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    source: K8sIoApiCoreV1TypedLocalObjectReferenceToJSON(value.source),
    tokenSecretRef: value.tokenSecretRef,
    ttlDuration: value.ttlDuration,
  };
}
