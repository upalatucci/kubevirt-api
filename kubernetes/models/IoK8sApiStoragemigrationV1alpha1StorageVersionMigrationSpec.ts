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
    IoK8sApiStoragemigrationV1alpha1GroupVersionResource,
    IoK8sApiStoragemigrationV1alpha1GroupVersionResourceFromJSON,
    IoK8sApiStoragemigrationV1alpha1GroupVersionResourceFromJSONTyped,
    IoK8sApiStoragemigrationV1alpha1GroupVersionResourceToJSON,
} from './';

/**
 * Spec of the storage version migration.
 * @export
 * @interface IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpec
 */
export interface IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpec {
    /**
     * The token used in the list options to get the next chunk of objects to migrate. When the .status.conditions indicates the migration is "Running", users can use this token to check the progress of the migration.
     * @type {string}
     * @memberof IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpec
     */
    continueToken?: string;
    /**
     * 
     * @type {IoK8sApiStoragemigrationV1alpha1GroupVersionResource}
     * @memberof IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpec
     */
    resource: IoK8sApiStoragemigrationV1alpha1GroupVersionResource;
}

export function IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpecFromJSON(json: any): IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpec {
    return IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpecFromJSONTyped(json, false);
}

export function IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'continueToken': !exists(json, 'continueToken') ? undefined : json['continueToken'],
        'resource': IoK8sApiStoragemigrationV1alpha1GroupVersionResourceFromJSON(json['resource']),
    };
}

export function IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpecToJSON(value?: IoK8sApiStoragemigrationV1alpha1StorageVersionMigrationSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'continueToken': value.continueToken,
        'resource': IoK8sApiStoragemigrationV1alpha1GroupVersionResourceToJSON(value.resource),
    };
}

