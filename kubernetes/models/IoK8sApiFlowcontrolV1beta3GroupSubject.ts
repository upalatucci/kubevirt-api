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
 * GroupSubject holds detailed information for group-kind subject.
 * @export
 * @interface IoK8sApiFlowcontrolV1beta3GroupSubject
 */
export interface IoK8sApiFlowcontrolV1beta3GroupSubject {
  /**
   * name is the user group that matches, or "*" to match all user groups. See https://github.com/kubernetes/apiserver/blob/master/pkg/authentication/user/user.go for some well-known group names. Required.
   * @type {string}
   * @memberof IoK8sApiFlowcontrolV1beta3GroupSubject
   */
  name: string;
}

export function IoK8sApiFlowcontrolV1beta3GroupSubjectFromJSON(
  json: any,
): IoK8sApiFlowcontrolV1beta3GroupSubject {
  return IoK8sApiFlowcontrolV1beta3GroupSubjectFromJSONTyped(json, false);
}

export function IoK8sApiFlowcontrolV1beta3GroupSubjectFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiFlowcontrolV1beta3GroupSubject {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    name: json['name'],
  };
}

export function IoK8sApiFlowcontrolV1beta3GroupSubjectToJSON(
  value?: IoK8sApiFlowcontrolV1beta3GroupSubject | null,
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
