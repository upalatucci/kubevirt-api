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
 * PersistentVolumeStatus is the current status of a persistent volume.
 * @export
 * @interface IoK8sApiCoreV1PersistentVolumeStatus
 */
export interface IoK8sApiCoreV1PersistentVolumeStatus {
  /**
   * message is a human-readable message indicating details about why the volume is in this state.
   * @type {string}
   * @memberof IoK8sApiCoreV1PersistentVolumeStatus
   */
  message?: string;
  /**
   * phase indicates if a volume is available, bound to a claim, or released by a claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#phase
   * @type {string}
   * @memberof IoK8sApiCoreV1PersistentVolumeStatus
   */
  phase?: string;
  /**
   * reason is a brief CamelCase string that describes any failure and is meant for machine parsing and tidy display in the CLI.
   * @type {string}
   * @memberof IoK8sApiCoreV1PersistentVolumeStatus
   */
  reason?: string;
}

export function IoK8sApiCoreV1PersistentVolumeStatusFromJSON(
  json: any,
): IoK8sApiCoreV1PersistentVolumeStatus {
  return IoK8sApiCoreV1PersistentVolumeStatusFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1PersistentVolumeStatusFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1PersistentVolumeStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    message: !exists(json, 'message') ? undefined : json['message'],
    phase: !exists(json, 'phase') ? undefined : json['phase'],
    reason: !exists(json, 'reason') ? undefined : json['reason'],
  };
}

export function IoK8sApiCoreV1PersistentVolumeStatusToJSON(
  value?: IoK8sApiCoreV1PersistentVolumeStatus | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    message: value.message,
    phase: value.phase,
    reason: value.reason,
  };
}
