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
  IoK8sApiNetworkingV1Ingress,
  IoK8sApiNetworkingV1IngressFromJSON,
  IoK8sApiNetworkingV1IngressToJSON,
  IoK8sApimachineryPkgApisMetaV1ListMeta,
  IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * IngressList is a collection of Ingress.
 * @export
 * @interface IoK8sApiNetworkingV1IngressList
 */
export interface IoK8sApiNetworkingV1IngressList {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiNetworkingV1IngressList
   */
  apiVersion?: string;
  /**
   * items is the list of Ingress.
   * @type {Array<IoK8sApiNetworkingV1Ingress>}
   * @memberof IoK8sApiNetworkingV1IngressList
   */
  items: Array<IoK8sApiNetworkingV1Ingress>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiNetworkingV1IngressList
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
   * @memberof IoK8sApiNetworkingV1IngressList
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiNetworkingV1IngressListFromJSON(
  json: any,
): IoK8sApiNetworkingV1IngressList {
  return IoK8sApiNetworkingV1IngressListFromJSONTyped(json, false);
}

export function IoK8sApiNetworkingV1IngressListFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiNetworkingV1IngressList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    items: (json['items'] as Array<any>).map(IoK8sApiNetworkingV1IngressFromJSON),
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
  };
}

export function IoK8sApiNetworkingV1IngressListToJSON(
  value?: IoK8sApiNetworkingV1IngressList | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    items: (value.items as Array<any>).map(IoK8sApiNetworkingV1IngressToJSON),
    kind: value.kind,
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
  };
}
