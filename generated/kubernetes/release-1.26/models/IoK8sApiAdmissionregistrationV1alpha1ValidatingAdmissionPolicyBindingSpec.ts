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

import { exists, mapValues } from '../runtime';
import {
    IoK8sApiAdmissionregistrationV1alpha1MatchResources,
    IoK8sApiAdmissionregistrationV1alpha1MatchResourcesFromJSON,
    IoK8sApiAdmissionregistrationV1alpha1MatchResourcesFromJSONTyped,
    IoK8sApiAdmissionregistrationV1alpha1MatchResourcesToJSON,
    IoK8sApiAdmissionregistrationV1alpha1ParamRef,
    IoK8sApiAdmissionregistrationV1alpha1ParamRefFromJSON,
    IoK8sApiAdmissionregistrationV1alpha1ParamRefFromJSONTyped,
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
}

export function IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpecFromJSON(json: any): IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpec {
    return IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpecFromJSONTyped(json, false);
}

export function IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'matchResources': !exists(json, 'matchResources') ? undefined : IoK8sApiAdmissionregistrationV1alpha1MatchResourcesFromJSON(json['matchResources']),
        'paramRef': !exists(json, 'paramRef') ? undefined : IoK8sApiAdmissionregistrationV1alpha1ParamRefFromJSON(json['paramRef']),
        'policyName': !exists(json, 'policyName') ? undefined : json['policyName'],
    };
}

export function IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpecToJSON(value?: IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'matchResources': IoK8sApiAdmissionregistrationV1alpha1MatchResourcesToJSON(value.matchResources),
        'paramRef': IoK8sApiAdmissionregistrationV1alpha1ParamRefToJSON(value.paramRef),
        'policyName': value.policyName,
    };
}

