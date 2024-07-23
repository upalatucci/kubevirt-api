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
  IoK8sApiPolicyV1PodDisruptionBudget,
  IoK8sApiPolicyV1PodDisruptionBudgetFromJSON,
  IoK8sApiPolicyV1PodDisruptionBudgetToJSON,
  IoK8sApimachineryPkgApisMetaV1ListMeta,
  IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * PodDisruptionBudgetList is a collection of PodDisruptionBudgets.
 * @export
 * @interface IoK8sApiPolicyV1PodDisruptionBudgetList
 */
export interface IoK8sApiPolicyV1PodDisruptionBudgetList {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiPolicyV1PodDisruptionBudgetList
   */
  apiVersion?: string;
  /**
   * Items is a list of PodDisruptionBudgets
   * @type {Array<IoK8sApiPolicyV1PodDisruptionBudget>}
   * @memberof IoK8sApiPolicyV1PodDisruptionBudgetList
   */
  items: Array<IoK8sApiPolicyV1PodDisruptionBudget>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiPolicyV1PodDisruptionBudgetList
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
   * @memberof IoK8sApiPolicyV1PodDisruptionBudgetList
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiPolicyV1PodDisruptionBudgetListFromJSON(
  json: any,
): IoK8sApiPolicyV1PodDisruptionBudgetList {
  return IoK8sApiPolicyV1PodDisruptionBudgetListFromJSONTyped(json, false);
}

export function IoK8sApiPolicyV1PodDisruptionBudgetListFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiPolicyV1PodDisruptionBudgetList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    items: (json['items'] as Array<any>).map(IoK8sApiPolicyV1PodDisruptionBudgetFromJSON),
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
  };
}

export function IoK8sApiPolicyV1PodDisruptionBudgetListToJSON(
  value?: IoK8sApiPolicyV1PodDisruptionBudgetList | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    items: (value.items as Array<any>).map(IoK8sApiPolicyV1PodDisruptionBudgetToJSON),
    kind: value.kind,
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
  };
}
