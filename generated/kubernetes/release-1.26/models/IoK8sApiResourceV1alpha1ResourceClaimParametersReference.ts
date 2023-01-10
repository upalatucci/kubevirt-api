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
/**
 * ResourceClaimParametersReference contains enough information to let you locate the parameters for a ResourceClaim. The object must be in the same namespace as the ResourceClaim.
 * @export
 * @interface IoK8sApiResourceV1alpha1ResourceClaimParametersReference
 */
export interface IoK8sApiResourceV1alpha1ResourceClaimParametersReference {
    /**
     * APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources.
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha1ResourceClaimParametersReference
     */
    apiGroup?: string;
    /**
     * Kind is the type of resource being referenced. This is the same value as in the parameter object's metadata, for example "ConfigMap".
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha1ResourceClaimParametersReference
     */
    kind: string;
    /**
     * Name is the name of resource being referenced.
     * @type {string}
     * @memberof IoK8sApiResourceV1alpha1ResourceClaimParametersReference
     */
    name: string;
}

export function IoK8sApiResourceV1alpha1ResourceClaimParametersReferenceFromJSON(json: any): IoK8sApiResourceV1alpha1ResourceClaimParametersReference {
    return IoK8sApiResourceV1alpha1ResourceClaimParametersReferenceFromJSONTyped(json, false);
}

export function IoK8sApiResourceV1alpha1ResourceClaimParametersReferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiResourceV1alpha1ResourceClaimParametersReference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiGroup': !exists(json, 'apiGroup') ? undefined : json['apiGroup'],
        'kind': json['kind'],
        'name': json['name'],
    };
}

export function IoK8sApiResourceV1alpha1ResourceClaimParametersReferenceToJSON(value?: IoK8sApiResourceV1alpha1ResourceClaimParametersReference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiGroup': value.apiGroup,
        'kind': value.kind,
        'name': value.name,
    };
}

