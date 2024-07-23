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
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionFromJSON,
  IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionToJSON,
  IoK8sApimachineryPkgApisMetaV1ListMeta,
  IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ListMetaToJSON,
} from './';

/**
 * CustomResourceDefinitionList is a list of CustomResourceDefinition objects.
 * @export
 * @interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList
 */
export interface IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList
   */
  apiVersion?: string;
  /**
   * items list individual CustomResourceDefinition objects
   * @type {Array<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition>}
   * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList
   */
  items: Array<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinition>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
   * @memberof IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionListFromJSON(
  json: any,
): IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList {
  return IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionListFromJSONTyped(
    json,
    false,
  );
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionListFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    items: (json['items'] as Array<any>).map(
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionFromJSON,
    ),
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
  };
}

export function IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionListToJSON(
  value?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionList | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    items: (value.items as Array<any>).map(
      IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionToJSON,
    ),
    kind: value.kind,
    metadata: IoK8sApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
  };
}
