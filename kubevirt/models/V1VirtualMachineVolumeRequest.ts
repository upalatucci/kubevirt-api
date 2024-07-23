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
  V1AddVolumeOptions,
  V1AddVolumeOptionsFromJSON,
  V1AddVolumeOptionsToJSON,
  V1RemoveVolumeOptions,
  V1RemoveVolumeOptionsFromJSON,
  V1RemoveVolumeOptionsToJSON,
} from './';

/**
 *
 * @export
 * @interface V1VirtualMachineVolumeRequest
 */
export interface V1VirtualMachineVolumeRequest {
  /**
   *
   * @type {V1AddVolumeOptions}
   * @memberof V1VirtualMachineVolumeRequest
   */
  addVolumeOptions?: V1AddVolumeOptions;
  /**
   *
   * @type {V1RemoveVolumeOptions}
   * @memberof V1VirtualMachineVolumeRequest
   */
  removeVolumeOptions?: V1RemoveVolumeOptions;
}

export function V1VirtualMachineVolumeRequestFromJSON(json: any): V1VirtualMachineVolumeRequest {
  return V1VirtualMachineVolumeRequestFromJSONTyped(json, false);
}

export function V1VirtualMachineVolumeRequestFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1VirtualMachineVolumeRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    addVolumeOptions: !exists(json, 'addVolumeOptions')
      ? undefined
      : V1AddVolumeOptionsFromJSON(json['addVolumeOptions']),
    removeVolumeOptions: !exists(json, 'removeVolumeOptions')
      ? undefined
      : V1RemoveVolumeOptionsFromJSON(json['removeVolumeOptions']),
  };
}

export function V1VirtualMachineVolumeRequestToJSON(
  value?: V1VirtualMachineVolumeRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    addVolumeOptions: V1AddVolumeOptionsToJSON(value.addVolumeOptions),
    removeVolumeOptions: V1RemoveVolumeOptionsToJSON(value.removeVolumeOptions),
  };
}
