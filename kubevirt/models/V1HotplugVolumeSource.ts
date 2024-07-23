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
  V1DataVolumeSource,
  V1DataVolumeSourceFromJSON,
  V1DataVolumeSourceToJSON,
  V1PersistentVolumeClaimVolumeSource,
  V1PersistentVolumeClaimVolumeSourceFromJSON,
  V1PersistentVolumeClaimVolumeSourceToJSON,
} from './';

/**
 * HotplugVolumeSource Represents the source of a volume to mount which are capable of being hotplugged on a live running VMI. Only one of its members may be specified.
 * @export
 * @interface V1HotplugVolumeSource
 */
export interface V1HotplugVolumeSource {
  /**
   *
   * @type {V1DataVolumeSource}
   * @memberof V1HotplugVolumeSource
   */
  dataVolume?: V1DataVolumeSource;
  /**
   *
   * @type {V1PersistentVolumeClaimVolumeSource}
   * @memberof V1HotplugVolumeSource
   */
  persistentVolumeClaim?: V1PersistentVolumeClaimVolumeSource;
}

export function V1HotplugVolumeSourceFromJSON(json: any): V1HotplugVolumeSource {
  return V1HotplugVolumeSourceFromJSONTyped(json, false);
}

export function V1HotplugVolumeSourceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1HotplugVolumeSource {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    dataVolume: !exists(json, 'dataVolume')
      ? undefined
      : V1DataVolumeSourceFromJSON(json['dataVolume']),
    persistentVolumeClaim: !exists(json, 'persistentVolumeClaim')
      ? undefined
      : V1PersistentVolumeClaimVolumeSourceFromJSON(json['persistentVolumeClaim']),
  };
}

export function V1HotplugVolumeSourceToJSON(value?: V1HotplugVolumeSource | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    dataVolume: V1DataVolumeSourceToJSON(value.dataVolume),
    persistentVolumeClaim: V1PersistentVolumeClaimVolumeSourceToJSON(value.persistentVolumeClaim),
  };
}
