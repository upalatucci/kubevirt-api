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
 * ClientIPConfig represents the configurations of Client IP based session affinity.
 * @export
 * @interface IoK8sApiCoreV1ClientIPConfig
 */
export interface IoK8sApiCoreV1ClientIPConfig {
  /**
   * timeoutSeconds specifies the seconds of ClientIP type session sticky time. The value must be >0 && <=86400(for 1 day) if ServiceAffinity == "ClientIP". Default value is 10800(for 3 hours).
   * @type {number}
   * @memberof IoK8sApiCoreV1ClientIPConfig
   */
  timeoutSeconds?: number;
}

export function IoK8sApiCoreV1ClientIPConfigFromJSON(json: any): IoK8sApiCoreV1ClientIPConfig {
  return IoK8sApiCoreV1ClientIPConfigFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ClientIPConfigFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1ClientIPConfig {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    timeoutSeconds: !exists(json, 'timeoutSeconds') ? undefined : json['timeoutSeconds'],
  };
}

export function IoK8sApiCoreV1ClientIPConfigToJSON(
  value?: IoK8sApiCoreV1ClientIPConfig | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    timeoutSeconds: value.timeoutSeconds,
  };
}
