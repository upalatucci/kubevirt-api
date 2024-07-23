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
import { V1beta1Error, V1beta1ErrorFromJSON, V1beta1ErrorToJSON } from './';

/**
 * VolumeSnapshotStatus is the status of a VolumeSnapshot
 * @export
 * @interface V1beta1VolumeSnapshotStatus
 */
export interface V1beta1VolumeSnapshotStatus {
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   * @type {string}
   * @memberof V1beta1VolumeSnapshotStatus
   */
  creationTime?: string;
  /**
   *
   * @type {V1beta1Error}
   * @memberof V1beta1VolumeSnapshotStatus
   */
  error?: V1beta1Error;
  /**
   *
   * @type {boolean}
   * @memberof V1beta1VolumeSnapshotStatus
   */
  readyToUse?: boolean;
  /**
   *
   * @type {string}
   * @memberof V1beta1VolumeSnapshotStatus
   */
  volumeSnapshotName: string;
}

export function V1beta1VolumeSnapshotStatusFromJSON(json: any): V1beta1VolumeSnapshotStatus {
  return V1beta1VolumeSnapshotStatusFromJSONTyped(json, false);
}

export function V1beta1VolumeSnapshotStatusFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1beta1VolumeSnapshotStatus {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    creationTime: !exists(json, 'creationTime') ? undefined : json['creationTime'],
    error: !exists(json, 'error') ? undefined : V1beta1ErrorFromJSON(json['error']),
    readyToUse: !exists(json, 'readyToUse') ? undefined : json['readyToUse'],
    volumeSnapshotName: json['volumeSnapshotName'],
  };
}

export function V1beta1VolumeSnapshotStatusToJSON(value?: V1beta1VolumeSnapshotStatus | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    creationTime: value.creationTime === undefined ? undefined : value.creationTime,
    error: V1beta1ErrorToJSON(value.error),
    readyToUse: value.readyToUse,
    volumeSnapshotName: value.volumeSnapshotName,
  };
}
