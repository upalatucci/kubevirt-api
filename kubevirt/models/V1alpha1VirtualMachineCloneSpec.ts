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
 *
 * @export
 * @interface V1alpha1VirtualMachineCloneSpec
 */
export interface V1alpha1VirtualMachineCloneSpec {
  /**
   *
   * @type {Array<string>}
   * @memberof V1alpha1VirtualMachineCloneSpec
   */
  annotationFilters?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof V1alpha1VirtualMachineCloneSpec
   */
  labelFilters?: Array<string>;
  /**
   * NewMacAddresses manually sets that target interfaces' mac addresses. The key is the interface name and the value is the new mac address. If this field is not specified, a new MAC address will be generated automatically, as for any interface that is not included in this map.
   * @type {{ [key: string]: string; }}
   * @memberof V1alpha1VirtualMachineCloneSpec
   */
  newMacAddresses?: { [key: string]: string };
  /**
   * NewSMBiosSerial manually sets that target's SMbios serial. If this field is not specified, a new serial will be generated automatically.
   * @type {string}
   * @memberof V1alpha1VirtualMachineCloneSpec
   */
  newSMBiosSerial?: string;
  /**
   *
   * @type {K8sIoApiCoreV1TypedLocalObjectReference}
   * @memberof V1alpha1VirtualMachineCloneSpec
   */
  source: K8sIoApiCoreV1TypedLocalObjectReference;
  /**
   *
   * @type {K8sIoApiCoreV1TypedLocalObjectReference}
   * @memberof V1alpha1VirtualMachineCloneSpec
   */
  target?: K8sIoApiCoreV1TypedLocalObjectReference;
}

export function V1alpha1VirtualMachineCloneSpecFromJSON(
  json: any,
): V1alpha1VirtualMachineCloneSpec {
  return V1alpha1VirtualMachineCloneSpecFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachineCloneSpecFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1alpha1VirtualMachineCloneSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    annotationFilters: !exists(json, 'annotationFilters') ? undefined : json['annotationFilters'],
    labelFilters: !exists(json, 'labelFilters') ? undefined : json['labelFilters'],
    newMacAddresses: !exists(json, 'newMacAddresses') ? undefined : json['newMacAddresses'],
    newSMBiosSerial: !exists(json, 'newSMBiosSerial') ? undefined : json['newSMBiosSerial'],
    source: K8sIoApiCoreV1TypedLocalObjectReferenceFromJSON(json['source']),
    target: !exists(json, 'target')
      ? undefined
      : K8sIoApiCoreV1TypedLocalObjectReferenceFromJSON(json['target']),
  };
}

export function V1alpha1VirtualMachineCloneSpecToJSON(
  value?: V1alpha1VirtualMachineCloneSpec | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    annotationFilters: value.annotationFilters,
    labelFilters: value.labelFilters,
    newMacAddresses: value.newMacAddresses,
    newSMBiosSerial: value.newSMBiosSerial,
    source: K8sIoApiCoreV1TypedLocalObjectReferenceToJSON(value.source),
    target: K8sIoApiCoreV1TypedLocalObjectReferenceToJSON(value.target),
  };
}
