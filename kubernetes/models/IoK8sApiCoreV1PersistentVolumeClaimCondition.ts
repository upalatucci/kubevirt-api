/* tslint:disable */
/* eslint-disable */
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: unversioned
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime';
/**
 * PersistentVolumeClaimCondition contails details about state of pvc
 * @export
 * @interface IoK8sApiCoreV1PersistentVolumeClaimCondition
 */
export interface IoK8sApiCoreV1PersistentVolumeClaimCondition {
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   * @type {string}
   * @memberof IoK8sApiCoreV1PersistentVolumeClaimCondition
   */
  lastProbeTime?: string;
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   * @type {string}
   * @memberof IoK8sApiCoreV1PersistentVolumeClaimCondition
   */
  lastTransitionTime?: string;
  /**
   * message is the human-readable message indicating details about last transition.
   * @type {string}
   * @memberof IoK8sApiCoreV1PersistentVolumeClaimCondition
   */
  message?: string;
  /**
   * reason is a unique, this should be a short, machine understandable string that gives the reason for condition's last transition. If it reports "ResizeStarted" that means the underlying persistent volume is being resized.
   * @type {string}
   * @memberof IoK8sApiCoreV1PersistentVolumeClaimCondition
   */
  reason?: string;
  /**
   *
   * @type {string}
   * @memberof IoK8sApiCoreV1PersistentVolumeClaimCondition
   */
  status: string;
  /**
   *
   * @type {string}
   * @memberof IoK8sApiCoreV1PersistentVolumeClaimCondition
   */
  type: string;
}

export function IoK8sApiCoreV1PersistentVolumeClaimConditionFromJSON(
  json: any,
): IoK8sApiCoreV1PersistentVolumeClaimCondition {
  return IoK8sApiCoreV1PersistentVolumeClaimConditionFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PersistentVolumeClaimConditionFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1PersistentVolumeClaimCondition {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    lastProbeTime: !exists(json, 'lastProbeTime') ? undefined : json['lastProbeTime'],
    lastTransitionTime: !exists(json, 'lastTransitionTime')
      ? undefined
      : json['lastTransitionTime'],
    message: !exists(json, 'message') ? undefined : json['message'],
    reason: !exists(json, 'reason') ? undefined : json['reason'],
    status: json['status'],
    type: json['type'],
  };
}

export function IoK8sApiCoreV1PersistentVolumeClaimConditionToJSON(
  value?: IoK8sApiCoreV1PersistentVolumeClaimCondition | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    lastProbeTime: value.lastProbeTime === undefined ? undefined : value.lastProbeTime,
    lastTransitionTime:
      value.lastTransitionTime === undefined ? undefined : value.lastTransitionTime,
    message: value.message,
    reason: value.reason,
    status: value.status,
    type: value.type,
  };
}
