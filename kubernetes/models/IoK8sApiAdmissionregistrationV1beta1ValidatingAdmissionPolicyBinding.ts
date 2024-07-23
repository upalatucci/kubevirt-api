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
  IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingSpec,
  IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingSpecFromJSON,
  IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingSpecToJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMeta,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * ValidatingAdmissionPolicyBinding binds the ValidatingAdmissionPolicy with paramerized resources. ValidatingAdmissionPolicyBinding and parameter CRDs together define how cluster administrators configure policies for clusters.
 *
 * For a given admission request, each binding will cause its policy to be evaluated N times, where N is 1 for policies/bindings that don't use params, otherwise N is the number of parameters selected by the binding.
 *
 * The CEL expressions of a policy must have a computed CEL cost below the maximum CEL budget. Each evaluation of the policy is given an independent CEL cost budget. Adding/removing policies, bindings, or params can not affect whether a given (policy, binding, param) combination is within its own CEL budget.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding
 */
export interface IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
   * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   *
   * @type {IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingSpec}
   * @memberof IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding
   */
  spec?: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingSpec;
}

export function IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingFromJSON(
  json: any,
): IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding {
  return IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingFromJSONTyped(
    json,
    false,
  );
}

export function IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
    spec: !exists(json, 'spec')
      ? undefined
      : IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingSpecFromJSON(
          json['spec'],
        ),
  };
}

export function IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingToJSON(
  value?: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBinding | null,
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
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
    spec: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingSpecToJSON(
      value.spec,
    ),
  };
}
