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
 * OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.
 * @export
 * @interface IoK8sApimachineryPkgApisMetaV1OwnerReference
 */
export interface IoK8sApimachineryPkgApisMetaV1OwnerReference {
  /**
   * API version of the referent.
   * @type {string}
   * @memberof IoK8sApimachineryPkgApisMetaV1OwnerReference
   */
  apiVersion: string;
  /**
   * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
   * @type {boolean}
   * @memberof IoK8sApimachineryPkgApisMetaV1OwnerReference
   */
  blockOwnerDeletion?: boolean;
  /**
   * If true, this reference points to the managing controller.
   * @type {boolean}
   * @memberof IoK8sApimachineryPkgApisMetaV1OwnerReference
   */
  controller?: boolean;
  /**
   * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApimachineryPkgApisMetaV1OwnerReference
   */
  kind: string;
  /**
   * Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names
   * @type {string}
   * @memberof IoK8sApimachineryPkgApisMetaV1OwnerReference
   */
  name: string;
  /**
   * UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
   * @type {string}
   * @memberof IoK8sApimachineryPkgApisMetaV1OwnerReference
   */
  uid: string;
}

export function IoK8sApimachineryPkgApisMetaV1OwnerReferenceFromJSON(
  json: any,
): IoK8sApimachineryPkgApisMetaV1OwnerReference {
  return IoK8sApimachineryPkgApisMetaV1OwnerReferenceFromJSONTyped(json, false);
}

export function IoK8sApimachineryPkgApisMetaV1OwnerReferenceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApimachineryPkgApisMetaV1OwnerReference {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: json['apiVersion'],
    blockOwnerDeletion: !exists(json, 'blockOwnerDeletion')
      ? undefined
      : json['blockOwnerDeletion'],
    controller: !exists(json, 'controller') ? undefined : json['controller'],
    kind: json['kind'],
    name: json['name'],
    uid: json['uid'],
  };
}

export function IoK8sApimachineryPkgApisMetaV1OwnerReferenceToJSON(
  value?: IoK8sApimachineryPkgApisMetaV1OwnerReference | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    blockOwnerDeletion: value.blockOwnerDeletion,
    controller: value.controller,
    kind: value.kind,
    name: value.name,
    uid: value.uid,
  };
}
