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
    IoK8sApiCoreV1NodeSpec,
    IoK8sApiCoreV1NodeSpecFromJSON,
    IoK8sApiCoreV1NodeSpecFromJSONTyped,
    IoK8sApiCoreV1NodeSpecToJSON,
    IoK8sApiCoreV1NodeStatus,
    IoK8sApiCoreV1NodeStatusFromJSON,
    IoK8sApiCoreV1NodeStatusFromJSONTyped,
    IoK8sApiCoreV1NodeStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).
 * @export
 * @interface IoK8sApiCoreV1Node
 */
export interface IoK8sApiCoreV1Node {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoreV1Node
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoreV1Node
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiCoreV1Node
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiCoreV1NodeSpec}
     * @memberof IoK8sApiCoreV1Node
     */
    spec?: IoK8sApiCoreV1NodeSpec;
    /**
     * 
     * @type {IoK8sApiCoreV1NodeStatus}
     * @memberof IoK8sApiCoreV1Node
     */
    status?: IoK8sApiCoreV1NodeStatus;
}

export function IoK8sApiCoreV1NodeFromJSON(json: any): IoK8sApiCoreV1Node {
    return IoK8sApiCoreV1NodeFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1NodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1Node {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiCoreV1NodeSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiCoreV1NodeStatusFromJSON(json['status']),
    };
}

export function IoK8sApiCoreV1NodeToJSON(value?: IoK8sApiCoreV1Node | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'apiVersion': value.apiVersion,
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'spec': IoK8sApiCoreV1NodeSpecToJSON(value.spec),
        'status': IoK8sApiCoreV1NodeStatusToJSON(value.status),
    };
}

