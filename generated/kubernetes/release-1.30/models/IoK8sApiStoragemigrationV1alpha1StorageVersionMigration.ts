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
    IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpec,
    IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpecFromJSON,
    IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpecFromJSONTyped,
    IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpecToJSON,
    IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationStatus,
    IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationStatusFromJSON,
    IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationStatusFromJSONTyped,
    IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationStatusToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * StorageVersionMigration represents a migration of stored data to the latest storage version.
 * @export
 * @interface IoK8sApiStoragemigrationV1alpha1StorageVersionMigration
 */
export interface IoK8sApiStoragemigrationV1alpha1StorageVersionMigration {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiStoragemigrationV1alpha1StorageVersionMigration
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiStoragemigrationV1alpha1StorageVersionMigration
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiStoragemigrationV1alpha1StorageVersionMigration
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * 
     * @type {IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpec}
     * @memberof IoK8sApiStoragemigrationV1alpha1StorageVersionMigration
     */
    spec?: IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpec;
    /**
     * 
     * @type {IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationStatus}
     * @memberof IoK8sApiStoragemigrationV1alpha1StorageVersionMigration
     */
    status?: IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationStatus;
}

export function IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationFromJSON(json: any): IoK8sApiStoragemigrationV1alpha1StorageVersionMigration {
    return IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationFromJSONTyped(json, false);
}

export function IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiStoragemigrationV1alpha1StorageVersionMigration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'spec': !exists(json, 'spec') ? undefined : IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpecFromJSON(json['spec']),
        'status': !exists(json, 'status') ? undefined : IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationStatusFromJSON(json['status']),
    };
}

export function IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationToJSON(value?: IoK8sApiStoragemigrationV1alpha1StorageVersionMigration | null): any {
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
        'spec': IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpecToJSON(value.spec),
        'status': IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationStatusToJSON(value.status),
    };
}

