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
 * ContainerStateWaiting is a waiting state of a container.
 * @export
 * @interface IoK8sApiCoreV1ContainerStateWaiting
 */
export interface IoK8sApiCoreV1ContainerStateWaiting {
  /**
   * Message regarding why the container is not yet running.
   * @type {string}
   * @memberof IoK8sApiCoreV1ContainerStateWaiting
   */
  message?: string;
  /**
   * (brief) reason the container is not yet running.
   * @type {string}
   * @memberof IoK8sApiCoreV1ContainerStateWaiting
   */
  reason?: string;
}

export function IoK8sApiCoreV1ContainerStateWaitingFromJSON(
  json: any,
): IoK8sApiCoreV1ContainerStateWaiting {
  return IoK8sApiCoreV1ContainerStateWaitingFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ContainerStateWaitingFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiCoreV1ContainerStateWaiting {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    message: !exists(json, 'message') ? undefined : json['message'],
    reason: !exists(json, 'reason') ? undefined : json['reason'],
  };
}

export function IoK8sApiCoreV1ContainerStateWaitingToJSON(
  value?: IoK8sApiCoreV1ContainerStateWaiting | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    message: value.message,
    reason: value.reason,
  };
}
