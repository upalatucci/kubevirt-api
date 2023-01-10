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
import {
  IoK8sApiCoreV1SecretReference,
  IoK8sApiCoreV1SecretReferenceFromJSON,
  IoK8sApiCoreV1SecretReferenceToJSON,
} from './';

/**
 * ScaleIOPersistentVolumeSource represents a persistent ScaleIO volume
 * @export
 * @interface IoK8sApiCoreV1ScaleIOPersistentVolumeSource
 */
export interface IoK8sApiCoreV1ScaleIOPersistentVolumeSource {
  /**
   * fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs"
   * @type {string}
   * @memberof IoK8sApiCoreV1ScaleIOPersistentVolumeSource
   */
  fsType?: string;
  /**
   * gateway is the host address of the ScaleIO API Gateway.
   * @type {string}
   * @memberof IoK8sApiCoreV1ScaleIOPersistentVolumeSource
   */
  gateway: string;
  /**
   * protectionDomain is the name of the ScaleIO Protection Domain for the configured storage.
   * @type {string}
   * @memberof IoK8sApiCoreV1ScaleIOPersistentVolumeSource
   */
  protectionDomain?: string;
  /**
   * readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
   * @type {boolean}
   * @memberof IoK8sApiCoreV1ScaleIOPersistentVolumeSource
   */
  readOnly?: boolean;
  /**
   *
   * @type {IoK8sApiCoreV1SecretReference}
   * @memberof IoK8sApiCoreV1ScaleIOPersistentVolumeSource
   */
  secretRef: IoK8sApiCoreV1SecretReference;
  /**
   * sslEnabled is the flag to enable/disable SSL communication with Gateway, default false
   * @type {boolean}
   * @memberof IoK8sApiCoreV1ScaleIOPersistentVolumeSource
   */
  sslEnabled?: boolean;
  /**
   * storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
   * @type {string}
   * @memberof IoK8sApiCoreV1ScaleIOPersistentVolumeSource
   */
  storageMode?: string;
  /**
   * storagePool is the ScaleIO Storage Pool associated with the protection domain.
   * @type {string}
   * @memberof IoK8sApiCoreV1ScaleIOPersistentVolumeSource
   */
  storagePool?: string;
  /**
   * system is the name of the storage system as configured in ScaleIO.
   * @type {string}
   * @memberof IoK8sApiCoreV1ScaleIOPersistentVolumeSource
   */
  system: string;
  /**
   * volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source.
   * @type {string}
   * @memberof IoK8sApiCoreV1ScaleIOPersistentVolumeSource
   */
  volumeName?: string;
}

export function IoK8sApiCoreV1ScaleIOPersistentVolumeSourceFromJSON(
  json: any,
): IoK8sApiCoreV1ScaleIOPersistentVolumeSource {
  return IoK8sApiCoreV1ScaleIOPersistentVolumeSourceFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ScaleIOPersistentVolumeSourceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1ScaleIOPersistentVolumeSource {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    fsType: !exists(json, 'fsType') ? undefined : json['fsType'],
    gateway: json['gateway'],
    protectionDomain: !exists(json, 'protectionDomain') ? undefined : json['protectionDomain'],
    readOnly: !exists(json, 'readOnly') ? undefined : json['readOnly'],
    secretRef: IoK8sApiCoreV1SecretReferenceFromJSON(json['secretRef']),
    sslEnabled: !exists(json, 'sslEnabled') ? undefined : json['sslEnabled'],
    storageMode: !exists(json, 'storageMode') ? undefined : json['storageMode'],
    storagePool: !exists(json, 'storagePool') ? undefined : json['storagePool'],
    system: json['system'],
    volumeName: !exists(json, 'volumeName') ? undefined : json['volumeName'],
  };
}

export function IoK8sApiCoreV1ScaleIOPersistentVolumeSourceToJSON(
  value?: IoK8sApiCoreV1ScaleIOPersistentVolumeSource | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    fsType: value.fsType,
    gateway: value.gateway,
    protectionDomain: value.protectionDomain,
    readOnly: value.readOnly,
    secretRef: IoK8sApiCoreV1SecretReferenceToJSON(value.secretRef),
    sslEnabled: value.sslEnabled,
    storageMode: value.storageMode,
    storagePool: value.storagePool,
    system: value.system,
    volumeName: value.volumeName,
  };
}
