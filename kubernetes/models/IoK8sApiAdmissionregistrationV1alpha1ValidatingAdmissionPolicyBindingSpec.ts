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
  IoK8sApiAdmissionregistrationV1alpha1MatchResources,
  IoK8sApiAdmissionregistrationV1alpha1MatchResourcesFromJSON,
  IoK8sApiAdmissionregistrationV1alpha1MatchResourcesToJSON,
  IoK8sApiAdmissionregistrationV1alpha1ParamRef,
  IoK8sApiAdmissionregistrationV1alpha1ParamRefFromJSON,
  IoK8sApiAdmissionregistrationV1alpha1ParamRefToJSON,
} from './';

/**
 * ValidatingAdmissionPolicyBindingSpec is the specification of the ValidatingAdmissionPolicyBinding.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpec
 */
export interface IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpec {
  /**
   *
   * @type {IoK8sApiAdmissionregistrationV1alpha1MatchResources}
   * @memberof IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpec
   */
  matchResources?: IoK8sApiAdmissionregistrationV1alpha1MatchResources;
  /**
   *
   * @type {IoK8sApiAdmissionregistrationV1alpha1ParamRef}
   * @memberof IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpec
   */
  paramRef?: IoK8sApiAdmissionregistrationV1alpha1ParamRef;
  /**
   * PolicyName references a ValidatingAdmissionPolicy name which the ValidatingAdmissionPolicyBinding binds to. If the referenced resource does not exist, this binding is considered invalid and will be ignored Required.
   * @type {string}
   * @memberof IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpec
   */
  policyName?: string;
  /**
   * validationActions declares how Validations of the referenced ValidatingAdmissionPolicy are enforced. If a validation evaluates to false it is always enforced according to these actions.
   *
   * Failures defined by the ValidatingAdmissionPolicy's FailurePolicy are enforced according to these actions only if the FailurePolicy is set to Fail, otherwise the failures are ignored. This includes compilation errors, runtime errors and misconfigurations of the policy.
   *
   * validationActions is declared as a set of action values. Order does not matter. validationActions may not contain duplicates of the same action.
   *
   * The supported actions values are:
   *
   * "Deny" specifies that a validation failure results in a denied request.
   *
   * "Warn" specifies that a validation failure is reported to the request client in HTTP Warning headers, with a warning code of 299. Warnings can be sent both for allowed or denied admission responses.
   *
   * "Audit" specifies that a validation failure is included in the published audit event for the request. The audit event will contain a `validation.policy.admission.k8s.io/validation_failure` audit annotation with a value containing the details of the validation failures, formatted as a JSON list of objects, each with the following fields: - message: The validation failure message string - policy: The resource name of the ValidatingAdmissionPolicy - binding: The resource name of the ValidatingAdmissionPolicyBinding - expressionIndex: The index of the failed validations in the ValidatingAdmissionPolicy - validationActions: The enforcement actions enacted for the validation failure Example audit annotation: `"validation.policy.admission.k8s.io/validation_failure": "[{"message": "Invalid value", {"policy": "policy.example.com", {"binding": "policybinding.example.com", {"expressionIndex": "1", {"validationActions": ["Audit"]}]"`
   *
   * Clients should expect to handle additional values by ignoring any values not recognized.
   *
   * "Deny" and "Warn" may not be used together since this combination needlessly duplicates the validation failure both in the API response body and the HTTP warning headers.
   *
   * Required.
   * @type {Array<string>}
   * @memberof IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpec
   */
  validationActions?: Array<string>;
}

export function IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpecFromJSON(
  json: any,
): IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpec {
  return IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpecFromJSONTyped(
    json,
    false,
  );
}

export function IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpecFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpec {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    matchResources: !exists(json, 'matchResources')
      ? undefined
      : IoK8sApiAdmissionregistrationV1alpha1MatchResourcesFromJSON(json['matchResources']),
    paramRef: !exists(json, 'paramRef')
      ? undefined
      : IoK8sApiAdmissionregistrationV1alpha1ParamRefFromJSON(json['paramRef']),
    policyName: !exists(json, 'policyName') ? undefined : json['policyName'],
    validationActions: !exists(json, 'validationActions') ? undefined : json['validationActions'],
  };
}

export function IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpecToJSON(
  value?: IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpec | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    matchResources: IoK8sApiAdmissionregistrationV1alpha1MatchResourcesToJSON(value.matchResources),
    paramRef: IoK8sApiAdmissionregistrationV1alpha1ParamRefToJSON(value.paramRef),
    policyName: value.policyName,
    validationActions: value.validationActions,
  };
}
