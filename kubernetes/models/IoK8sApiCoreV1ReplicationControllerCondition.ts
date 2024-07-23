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
 * ReplicationControllerCondition describes the state of a replication controller at a certain point.
 * @export
 * @interface IoK8sApiCoreV1ReplicationControllerCondition
 */
export interface IoK8sApiCoreV1ReplicationControllerCondition {
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof IoK8sApiCoreV1ReplicationControllerCondition
     */
    lastTransitionTime?: string;
    /**
     * A human readable message indicating details about the transition.
     * @type {string}
     * @memberof IoK8sApiCoreV1ReplicationControllerCondition
     */
    message?: string;
    /**
     * The reason for the condition's last transition.
     * @type {string}
     * @memberof IoK8sApiCoreV1ReplicationControllerCondition
     */
    reason?: string;
    /**
     * Status of the condition, one of True, False, Unknown.
     * @type {string}
     * @memberof IoK8sApiCoreV1ReplicationControllerCondition
     */
    status: string;
    /**
     * Type of replication controller condition.
     * @type {string}
     * @memberof IoK8sApiCoreV1ReplicationControllerCondition
     */
    type: string;
}

export function IoK8sApiCoreV1ReplicationControllerConditionFromJSON(json: any): IoK8sApiCoreV1ReplicationControllerCondition {
    return IoK8sApiCoreV1ReplicationControllerConditionFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1ReplicationControllerConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1ReplicationControllerCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lastTransitionTime': !exists(json, 'lastTransitionTime') ? undefined : (new Date(json['lastTransitionTime'])),
        'message': !exists(json, 'message') ? undefined : json['message'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'status': json['status'],
        'type': json['type'],
    };
}

export function IoK8sApiCoreV1ReplicationControllerConditionToJSON(value?: IoK8sApiCoreV1ReplicationControllerCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lastTransitionTime': value.lastTransitionTime === undefined ? undefined : (value.lastTransitionTime.toISOString()),
        'message': value.message,
        'reason': value.reason,
        'status': value.status,
        'type': value.type,
    };
}

