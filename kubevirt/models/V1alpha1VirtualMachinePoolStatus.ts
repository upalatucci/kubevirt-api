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
  V1alpha1VirtualMachinePoolCondition,
  V1alpha1VirtualMachinePoolConditionFromJSON,
  V1alpha1VirtualMachinePoolConditionToJSON,
} from './';

/**
 *
 * @export
 * @interface V1alpha1VirtualMachinePoolStatus
 */
export interface V1alpha1VirtualMachinePoolStatus {
  /**
   *
   * @type {Array<V1alpha1VirtualMachinePoolCondition>}
   * @memberof V1alpha1VirtualMachinePoolStatus
   */
  conditions?: Array<V1alpha1VirtualMachinePoolCondition>;
  /**
   * Canonical form of the label selector for HPA which consumes it through the scale subresource.
   * @type {string}
   * @memberof V1alpha1VirtualMachinePoolStatus
   */
  labelSelector?: string;
  /**
   *
   * @type {number}
   * @memberof V1alpha1VirtualMachinePoolStatus
   */
  readyReplicas?: number;
  /**
   *
   * @type {number}
   * @memberof V1alpha1VirtualMachinePoolStatus
   */
  replicas?: number;
}

export function V1alpha1VirtualMachinePoolStatusFromJSON(
  json: any,
): V1alpha1VirtualMachinePoolStatus {
  return V1alpha1VirtualMachinePoolStatusFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachinePoolStatusFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1alpha1VirtualMachinePoolStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    conditions: !exists(json, 'conditions')
      ? undefined
      : (json['conditions'] as Array<any>).map(V1alpha1VirtualMachinePoolConditionFromJSON),
    labelSelector: !exists(json, 'labelSelector') ? undefined : json['labelSelector'],
    readyReplicas: !exists(json, 'readyReplicas') ? undefined : json['readyReplicas'],
    replicas: !exists(json, 'replicas') ? undefined : json['replicas'],
  };
}

export function V1alpha1VirtualMachinePoolStatusToJSON(
  value?: V1alpha1VirtualMachinePoolStatus | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    conditions:
      value.conditions === undefined
        ? undefined
        : (value.conditions as Array<any>).map(V1alpha1VirtualMachinePoolConditionToJSON),
    labelSelector: value.labelSelector,
    readyReplicas: value.readyReplicas,
    replicas: value.replicas,
  };
}
