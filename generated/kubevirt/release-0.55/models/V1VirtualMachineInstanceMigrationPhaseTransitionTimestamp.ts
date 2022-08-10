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
 * VirtualMachineInstanceMigrationPhaseTransitionTimestamp gives a timestamp in relation to when a phase is set on a vmi
 * @export
 * @interface V1VirtualMachineInstanceMigrationPhaseTransitionTimestamp
 */
export interface V1VirtualMachineInstanceMigrationPhaseTransitionTimestamp {
    /**
     * Phase is the status of the VirtualMachineInstanceMigrationPhase in kubernetes world. It is not the VirtualMachineInstanceMigrationPhase status, but partially correlates to it.
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationPhaseTransitionTimestamp
     */
    phase?: string;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     * @type {string}
     * @memberof V1VirtualMachineInstanceMigrationPhaseTransitionTimestamp
     */
    phaseTransitionTimestamp?: string;
}

export function V1VirtualMachineInstanceMigrationPhaseTransitionTimestampFromJSON(json: any): V1VirtualMachineInstanceMigrationPhaseTransitionTimestamp {
    return V1VirtualMachineInstanceMigrationPhaseTransitionTimestampFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceMigrationPhaseTransitionTimestampFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstanceMigrationPhaseTransitionTimestamp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'phase': !exists(json, 'phase') ? undefined : json['phase'],
        'phaseTransitionTimestamp': !exists(json, 'phaseTransitionTimestamp') ? undefined : (new Date(json['phaseTransitionTimestamp'])),
    };
}

export function V1VirtualMachineInstanceMigrationPhaseTransitionTimestampToJSON(value?: V1VirtualMachineInstanceMigrationPhaseTransitionTimestamp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'phase': value.phase,
        'phaseTransitionTimestamp': value.phaseTransitionTimestamp === undefined ? undefined : (value.phaseTransitionTimestamp.toISOString()),
    };
}

