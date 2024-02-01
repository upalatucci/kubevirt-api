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
 * SleepAction describes a "sleep" action.
 * @export
 * @interface IoK8sApiCoreV1SleepAction
 */
export interface IoK8sApiCoreV1SleepAction {
    /**
     * Seconds is the number of seconds to sleep.
     * @type {number}
     * @memberof IoK8sApiCoreV1SleepAction
     */
    seconds: number;
}

export function IoK8sApiCoreV1SleepActionFromJSON(json: any): IoK8sApiCoreV1SleepAction {
    return IoK8sApiCoreV1SleepActionFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1SleepActionFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1SleepAction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'seconds': json['seconds'],
    };
}

export function IoK8sApiCoreV1SleepActionToJSON(value?: IoK8sApiCoreV1SleepAction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'seconds': value.seconds,
    };
}

