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
import {
    V1NUMA,
    V1NUMAFromJSON,
    V1NUMAFromJSONTyped,
    V1NUMAToJSON,
    V1Realtime,
    V1RealtimeFromJSON,
    V1RealtimeFromJSONTyped,
    V1RealtimeToJSON,
} from './';

/**
 * CPUFlavor contains the CPU related configuration of a given VirtualMachineFlavorSpec.
 * 
 * Guest is a required attribute and defines the number of vCPUs to be exposed to the guest by the flavor.
 * @export
 * @interface V1alpha1CPUFlavor
 */
export interface V1alpha1CPUFlavor {
    /**
     * DedicatedCPUPlacement requests the scheduler to place the VirtualMachineInstance on a node with enough dedicated pCPUs and pin the vCPUs to it.
     * @type {boolean}
     * @memberof V1alpha1CPUFlavor
     */
    dedicatedCPUPlacement?: boolean;
    /**
     * Required number of vCPUs to expose to the guest.
     * 
     * The resulting CPU topology being derived from the optional PreferredCPUTopology attribute of CPUPreferences that itself defaults to PreferCores.
     * @type {number}
     * @memberof V1alpha1CPUFlavor
     */
    guest: number;
    /**
     * IsolateEmulatorThread requests one more dedicated pCPU to be allocated for the VMI to place the emulator thread on it.
     * @type {boolean}
     * @memberof V1alpha1CPUFlavor
     */
    isolateEmulatorThread?: boolean;
    /**
     * Model specifies the CPU model inside the VMI. List of available models https://github.com/libvirt/libvirt/tree/master/src/cpu_map. It is possible to specify special cases like "host-passthrough" to get the same CPU as the node and "host-model" to get CPU closest to the node one. Defaults to host-model.
     * @type {string}
     * @memberof V1alpha1CPUFlavor
     */
    model?: string;
    /**
     * 
     * @type {V1NUMA}
     * @memberof V1alpha1CPUFlavor
     */
    numa?: V1NUMA;
    /**
     * 
     * @type {V1Realtime}
     * @memberof V1alpha1CPUFlavor
     */
    realtime?: V1Realtime;
}

export function V1alpha1CPUFlavorFromJSON(json: any): V1alpha1CPUFlavor {
    return V1alpha1CPUFlavorFromJSONTyped(json, false);
}

export function V1alpha1CPUFlavorFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1CPUFlavor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dedicatedCPUPlacement': !exists(json, 'dedicatedCPUPlacement') ? undefined : json['dedicatedCPUPlacement'],
        'guest': json['guest'],
        'isolateEmulatorThread': !exists(json, 'isolateEmulatorThread') ? undefined : json['isolateEmulatorThread'],
        'model': !exists(json, 'model') ? undefined : json['model'],
        'numa': !exists(json, 'numa') ? undefined : V1NUMAFromJSON(json['numa']),
        'realtime': !exists(json, 'realtime') ? undefined : V1RealtimeFromJSON(json['realtime']),
    };
}

export function V1alpha1CPUFlavorToJSON(value?: V1alpha1CPUFlavor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dedicatedCPUPlacement': value.dedicatedCPUPlacement,
        'guest': value.guest,
        'isolateEmulatorThread': value.isolateEmulatorThread,
        'model': value.model,
        'numa': V1NUMAToJSON(value.numa),
        'realtime': V1RealtimeToJSON(value.realtime),
    };
}

