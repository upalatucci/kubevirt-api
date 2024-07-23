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
    IoK8sApiCoreV1NodeRuntimeHandlerFeatures,
    IoK8sApiCoreV1NodeRuntimeHandlerFeaturesFromJSON,
    IoK8sApiCoreV1NodeRuntimeHandlerFeaturesFromJSONTyped,
    IoK8sApiCoreV1NodeRuntimeHandlerFeaturesToJSON,
} from './';

/**
 * NodeRuntimeHandler is a set of runtime handler information.
 * @export
 * @interface IoK8sApiCoreV1NodeRuntimeHandler
 */
export interface IoK8sApiCoreV1NodeRuntimeHandler {
    /**
     * 
     * @type {IoK8sApiCoreV1NodeRuntimeHandlerFeatures}
     * @memberof IoK8sApiCoreV1NodeRuntimeHandler
     */
    features?: IoK8sApiCoreV1NodeRuntimeHandlerFeatures;
    /**
     * Runtime handler name. Empty for the default runtime handler.
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeRuntimeHandler
     */
    name?: string;
}

export function IoK8sApiCoreV1NodeRuntimeHandlerFromJSON(json: any): IoK8sApiCoreV1NodeRuntimeHandler {
    return IoK8sApiCoreV1NodeRuntimeHandlerFromJSONTyped(json, false);
}

export function IoK8sApiCoreV1NodeRuntimeHandlerFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiCoreV1NodeRuntimeHandler {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'features': !exists(json, 'features') ? undefined : IoK8sApiCoreV1NodeRuntimeHandlerFeaturesFromJSON(json['features']),
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function IoK8sApiCoreV1NodeRuntimeHandlerToJSON(value?: IoK8sApiCoreV1NodeRuntimeHandler | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'features': IoK8sApiCoreV1NodeRuntimeHandlerFeaturesToJSON(value.features),
        'name': value.name,
    };
}

