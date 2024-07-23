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
    IoK8sApiStorageV1VolumeAttachmentSource,
    IoK8sApiStorageV1VolumeAttachmentSourceFromJSON,
    IoK8sApiStorageV1VolumeAttachmentSourceFromJSONTyped,
    IoK8sApiStorageV1VolumeAttachmentSourceToJSON,
} from './';

/**
 * VolumeAttachmentSpec is the specification of a VolumeAttachment request.
 * @export
 * @interface IoK8sApiStorageV1VolumeAttachmentSpec
 */
export interface IoK8sApiStorageV1VolumeAttachmentSpec {
    /**
     * attacher indicates the name of the volume driver that MUST handle this request. This is the name returned by GetPluginName().
     * @type {string}
     * @memberof IoK8sApiStorageV1VolumeAttachmentSpec
     */
    attacher: string;
    /**
     * nodeName represents the node that the volume should be attached to.
     * @type {string}
     * @memberof IoK8sApiStorageV1VolumeAttachmentSpec
     */
    nodeName: string;
    /**
     * 
     * @type {IoK8sApiStorageV1VolumeAttachmentSource}
     * @memberof IoK8sApiStorageV1VolumeAttachmentSpec
     */
    source: IoK8sApiStorageV1VolumeAttachmentSource;
}

export function IoK8sApiStorageV1VolumeAttachmentSpecFromJSON(json: any): IoK8sApiStorageV1VolumeAttachmentSpec {
    return IoK8sApiStorageV1VolumeAttachmentSpecFromJSONTyped(json, false);
}

export function IoK8sApiStorageV1VolumeAttachmentSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiStorageV1VolumeAttachmentSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attacher': json['attacher'],
        'nodeName': json['nodeName'],
        'source': IoK8sApiStorageV1VolumeAttachmentSourceFromJSON(json['source']),
    };
}

export function IoK8sApiStorageV1VolumeAttachmentSpecToJSON(value?: IoK8sApiStorageV1VolumeAttachmentSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attacher': value.attacher,
        'nodeName': value.nodeName,
        'source': IoK8sApiStorageV1VolumeAttachmentSourceToJSON(value.source),
    };
}

