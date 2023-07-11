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
/**
 * VirtualMachineOptions holds the cluster level information regarding the virtual machine.
 * @export
 * @interface V1VirtualMachineOptions
 */
export interface V1VirtualMachineOptions {
  /**
   *
   * @type {object}
   * @memberof V1VirtualMachineOptions
   */
  disableFreePageReporting?: object;
}

export function V1VirtualMachineOptionsFromJSON(json: any): V1VirtualMachineOptions {
  return V1VirtualMachineOptionsFromJSONTyped(json, false);
}

export function V1VirtualMachineOptionsFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1VirtualMachineOptions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    disableFreePageReporting: !exists(json, 'disableFreePageReporting')
      ? undefined
      : json['disableFreePageReporting'],
  };
}

export function V1VirtualMachineOptionsToJSON(value?: V1VirtualMachineOptions | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    disableFreePageReporting: value.disableFreePageReporting,
  };
}
