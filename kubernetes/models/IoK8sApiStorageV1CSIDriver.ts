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
  IoK8sApiStorageV1CSIDriverSpec,
  IoK8sApiStorageV1CSIDriverSpecFromJSON,
  IoK8sApiStorageV1CSIDriverSpecToJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMeta,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * CSIDriver captures information about a Container Storage Interface (CSI) volume driver deployed on the cluster. Kubernetes attach detach controller uses this object to determine whether attach is required. Kubelet uses this object to determine whether pod information needs to be passed on mount. CSIDriver objects are non-namespaced.
 * @export
 * @interface IoK8sApiStorageV1CSIDriver
 */
export interface IoK8sApiStorageV1CSIDriver {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiStorageV1CSIDriver
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiStorageV1CSIDriver
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
   * @memberof IoK8sApiStorageV1CSIDriver
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   *
   * @type {IoK8sApiStorageV1CSIDriverSpec}
   * @memberof IoK8sApiStorageV1CSIDriver
   */
  spec: IoK8sApiStorageV1CSIDriverSpec;
}

export function IoK8sApiStorageV1CSIDriverFromJSON(json: any): IoK8sApiStorageV1CSIDriver {
  return IoK8sApiStorageV1CSIDriverFromJSONTyped(json, false);
}

export function IoK8sApiStorageV1CSIDriverFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiStorageV1CSIDriver {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
    spec: IoK8sApiStorageV1CSIDriverSpecFromJSON(json['spec']),
  };
}

export function IoK8sApiStorageV1CSIDriverToJSON(value?: IoK8sApiStorageV1CSIDriver | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    kind: value.kind,
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
    spec: IoK8sApiStorageV1CSIDriverSpecToJSON(value.spec),
  };
}
