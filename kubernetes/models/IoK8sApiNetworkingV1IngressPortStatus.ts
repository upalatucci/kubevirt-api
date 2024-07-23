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
 * IngressPortStatus represents the error condition of a service port
 * @export
 * @interface IoK8sApiNetworkingV1IngressPortStatus
 */
export interface IoK8sApiNetworkingV1IngressPortStatus {
    /**
     * error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use
     *   CamelCase names
     * - cloud provider specific error values must have names that comply with the
     *   format foo.example.com/CamelCase.
     * @type {string}
     * @memberof IoK8sApiNetworkingV1IngressPortStatus
     */
    error?: string;
    /**
     * port is the port number of the ingress port.
     * @type {number}
     * @memberof IoK8sApiNetworkingV1IngressPortStatus
     */
    port: number;
    /**
     * protocol is the protocol of the ingress port. The supported values are: "TCP", "UDP", "SCTP"
     * @type {string}
     * @memberof IoK8sApiNetworkingV1IngressPortStatus
     */
    protocol: string;
}

export function IoK8sApiNetworkingV1IngressPortStatusFromJSON(json: any): IoK8sApiNetworkingV1IngressPortStatus {
    return IoK8sApiNetworkingV1IngressPortStatusFromJSONTyped(json, false);
}

export function IoK8sApiNetworkingV1IngressPortStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): IoK8sApiNetworkingV1IngressPortStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
        'port': json['port'],
        'protocol': json['protocol'],
    };
}

export function IoK8sApiNetworkingV1IngressPortStatusToJSON(value?: IoK8sApiNetworkingV1IngressPortStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error,
        'port': value.port,
        'protocol': value.protocol,
    };
}

