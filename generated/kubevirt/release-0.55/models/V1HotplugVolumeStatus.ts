/* tslint:disable */
/* eslint-disable */
/**
 * KubeVirt API
 * This is KubeVirt API an add-on for Kubernetes.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: kubevirt-dev@googlegroups.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * HotplugVolumeStatus represents the hotplug status of the volume
 * @export
 * @interface V1HotplugVolumeStatus
 */
export interface V1HotplugVolumeStatus {
    /**
     * AttachPodName is the name of the pod used to attach the volume to the node.
     * @type {string}
     * @memberof V1HotplugVolumeStatus
     */
    attachPodName?: string;
    /**
     * AttachPodUID is the UID of the pod used to attach the volume to the node.
     * @type {string}
     * @memberof V1HotplugVolumeStatus
     */
    attachPodUID?: string;
}

export function V1HotplugVolumeStatusFromJSON(json: any): V1HotplugVolumeStatus {
    return V1HotplugVolumeStatusFromJSONTyped(json, false);
}

export function V1HotplugVolumeStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1HotplugVolumeStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attachPodName': !exists(json, 'attachPodName') ? undefined : json['attachPodName'],
        'attachPodUID': !exists(json, 'attachPodUID') ? undefined : json['attachPodUID'],
    };
}

export function V1HotplugVolumeStatusToJSON(value?: V1HotplugVolumeStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attachPodName': value.attachPodName,
        'attachPodUID': value.attachPodUID,
    };
}

