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
    IoK8sApiDiscoveryV1Endpoint,
    IoK8sApiDiscoveryV1EndpointFromJSON,
    IoK8sApiDiscoveryV1EndpointFromJSONTyped,
    IoK8sApiDiscoveryV1EndpointToJSON,
    IoK8sApiDiscoveryV1EndpointPort,
    IoK8sApiDiscoveryV1EndpointPortFromJSON,
    IoK8sApiDiscoveryV1EndpointPortFromJSONTyped,
    IoK8sApiDiscoveryV1EndpointPortToJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSONTyped,
    IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * EndpointSlice represents a subset of the endpoints that implement a service. For a given service there may be multiple EndpointSlice objects, selected by labels, which must be joined to produce the full set of endpoints.
 * @export
 * @interface IoK8sApiDiscoveryV1EndpointSlice
 */
export interface IoK8sApiDiscoveryV1EndpointSlice {
    /**
     * addressType specifies the type of address carried by this EndpointSlice. All addresses in this slice must be the same type. This field is immutable after creation. The following address types are currently supported: * IPv4: Represents an IPv4 Address. * IPv6: Represents an IPv6 Address. * FQDN: Represents a Fully Qualified Domain Name.
     * @type {string}
     * @memberof IoK8sApiDiscoveryV1EndpointSlice
     */
    addressType: string;
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiDiscoveryV1EndpointSlice
     */
    apiVersion?: string;
    /**
     * endpoints is a list of unique endpoints in this slice. Each slice may include a maximum of 1000 endpoints.
     * @type {Array<IoK8sApiDiscoveryV1Endpoint>}
     * @memberof IoK8sApiDiscoveryV1EndpointSlice
     */
    endpoints: Array<IoK8sApiDiscoveryV1Endpoint>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiDiscoveryV1EndpointSlice
     */
    kind?: string;
    /**
     * 
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiDiscoveryV1EndpointSlice
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * ports specifies the list of network ports exposed by each endpoint in this slice. Each port must have a unique name. When ports is empty, it indicates that there are no defined ports. When a port is defined with a nil port value, it indicates "all ports". Each slice may include a maximum of 100 ports.
     * @type {Array<IoK8sApiDiscoveryV1EndpointPort>}
     * @memberof IoK8sApiDiscoveryV1EndpointSlice
     */
    ports?: Array<IoK8sApiDiscoveryV1EndpointPort>;
}

export function IoK8sApiDiscoveryV1EndpointSliceFromJSON(json: any): IoK8sApiDiscoveryV1EndpointSlice {
    return IoK8sApiDiscoveryV1EndpointSliceFromJSONTyped(json, false);
}

export function IoK8sApiDiscoveryV1EndpointSliceFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiDiscoveryV1EndpointSlice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressType': json['addressType'],
        'apiVersion': !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
        'endpoints': ((json['endpoints'] as Array<any>).map(IoK8sApiDiscoveryV1EndpointFromJSON)),
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'metadata': !exists(json, 'metadata') ? undefined : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
        'ports': !exists(json, 'ports') ? undefined : ((json['ports'] as Array<any>).map(IoK8sApiDiscoveryV1EndpointPortFromJSON)),
    };
}

export function IoK8sApiDiscoveryV1EndpointSliceToJSON(value?: IoK8sApiDiscoveryV1EndpointSlice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addressType': value.addressType,
        'apiVersion': value.apiVersion,
        'endpoints': ((value.endpoints as Array<any>).map(IoK8sApiDiscoveryV1EndpointToJSON)),
        'kind': value.kind,
        'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
        'ports': value.ports === undefined ? undefined : ((value.ports as Array<any>).map(IoK8sApiDiscoveryV1EndpointPortToJSON)),
    };
}

