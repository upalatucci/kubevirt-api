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

/**
 * NamedResourcesAllocationResult is used in AllocationResultModel.
 * @export
 * @interface IoK8sApiResourceV1alpha2NamedResourcesAllocationResult
 */
export interface IoK8sApiResourceV1alpha2NamedResourcesAllocationResult {
  /**
   * Name is the name of the selected resource instance.
   * @type {string}
   * @memberof IoK8sApiResourceV1alpha2NamedResourcesAllocationResult
   */
  name: string;
}

export function IoK8sApiResourceV1alpha2NamedResourcesAllocationResultFromJSON(
  json: any,
): IoK8sApiResourceV1alpha2NamedResourcesAllocationResult {
  return IoK8sApiResourceV1alpha2NamedResourcesAllocationResultFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha2NamedResourcesAllocationResultFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiResourceV1alpha2NamedResourcesAllocationResult {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json['name'],
  };
}

export function IoK8sApiResourceV1alpha2NamedResourcesAllocationResultToJSON(
  value?: IoK8sApiResourceV1alpha2NamedResourcesAllocationResult | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
  };
}
