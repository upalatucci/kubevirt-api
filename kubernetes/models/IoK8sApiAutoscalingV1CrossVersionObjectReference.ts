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
 * CrossVersionObjectReference contains enough information to let you identify the referred resource.
 * @export
 * @interface IoK8sApiAutoscalingV1CrossVersionObjectReference
 */
export interface IoK8sApiAutoscalingV1CrossVersionObjectReference {
  /**
   * API version of the referent
   * @type {string}
   * @memberof IoK8sApiAutoscalingV1CrossVersionObjectReference
   */
  apiVersion?: string;
  /**
   * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiAutoscalingV1CrossVersionObjectReference
   */
  kind: string;
  /**
   * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
   * @type {string}
   * @memberof IoK8sApiAutoscalingV1CrossVersionObjectReference
   */
  name: string;
}

export function IoK8sApiAutoscalingV1CrossVersionObjectReferenceFromJSON(
  json: any,
): IoK8sApiAutoscalingV1CrossVersionObjectReference {
  return IoK8sApiAutoscalingV1CrossVersionObjectReferenceFromJSONTyped(json, false);
}

export function IoK8sApiAutoscalingV1CrossVersionObjectReferenceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiAutoscalingV1CrossVersionObjectReference {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    kind: json['kind'],
    name: json['name'],
  };
}

export function IoK8sApiAutoscalingV1CrossVersionObjectReferenceToJSON(
  value?: IoK8sApiAutoscalingV1CrossVersionObjectReference | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    kind: value.kind,
    name: value.name,
  };
}
