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
    V1alpha1CPUPreferences,
    V1alpha1CPUPreferencesFromJSON,
    V1alpha1CPUPreferencesFromJSONTyped,
    V1alpha1CPUPreferencesToJSON,
    V1alpha1ClockPreferences,
    V1alpha1ClockPreferencesFromJSON,
    V1alpha1ClockPreferencesFromJSONTyped,
    V1alpha1ClockPreferencesToJSON,
    V1alpha1DevicePreferences,
    V1alpha1DevicePreferencesFromJSON,
    V1alpha1DevicePreferencesFromJSONTyped,
    V1alpha1DevicePreferencesToJSON,
    V1alpha1FeaturePreferences,
    V1alpha1FeaturePreferencesFromJSON,
    V1alpha1FeaturePreferencesFromJSONTyped,
    V1alpha1FeaturePreferencesToJSON,
    V1alpha1FirmwarePreferences,
    V1alpha1FirmwarePreferencesFromJSON,
    V1alpha1FirmwarePreferencesFromJSONTyped,
    V1alpha1FirmwarePreferencesToJSON,
    V1alpha1MachinePreferences,
    V1alpha1MachinePreferencesFromJSON,
    V1alpha1MachinePreferencesFromJSONTyped,
    V1alpha1MachinePreferencesToJSON,
} from './';

/**
 * VirtualMachinePreferenceSpec is a description of the VirtualMachinePreference or VirtualMachineClusterPreference.
 * @export
 * @interface V1alpha1VirtualMachinePreferenceSpec
 */
export interface V1alpha1VirtualMachinePreferenceSpec {
    /**
     * 
     * @type {V1alpha1ClockPreferences}
     * @memberof V1alpha1VirtualMachinePreferenceSpec
     */
    clock?: V1alpha1ClockPreferences;
    /**
     * 
     * @type {V1alpha1CPUPreferences}
     * @memberof V1alpha1VirtualMachinePreferenceSpec
     */
    cpu?: V1alpha1CPUPreferences;
    /**
     * 
     * @type {V1alpha1DevicePreferences}
     * @memberof V1alpha1VirtualMachinePreferenceSpec
     */
    devices?: V1alpha1DevicePreferences;
    /**
     * 
     * @type {V1alpha1FeaturePreferences}
     * @memberof V1alpha1VirtualMachinePreferenceSpec
     */
    features?: V1alpha1FeaturePreferences;
    /**
     * 
     * @type {V1alpha1FirmwarePreferences}
     * @memberof V1alpha1VirtualMachinePreferenceSpec
     */
    firmware?: V1alpha1FirmwarePreferences;
    /**
     * 
     * @type {V1alpha1MachinePreferences}
     * @memberof V1alpha1VirtualMachinePreferenceSpec
     */
    machine?: V1alpha1MachinePreferences;
}

export function V1alpha1VirtualMachinePreferenceSpecFromJSON(json: any): V1alpha1VirtualMachinePreferenceSpec {
    return V1alpha1VirtualMachinePreferenceSpecFromJSONTyped(json, false);
}

export function V1alpha1VirtualMachinePreferenceSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1alpha1VirtualMachinePreferenceSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clock': !exists(json, 'clock') ? undefined : V1alpha1ClockPreferencesFromJSON(json['clock']),
        'cpu': !exists(json, 'cpu') ? undefined : V1alpha1CPUPreferencesFromJSON(json['cpu']),
        'devices': !exists(json, 'devices') ? undefined : V1alpha1DevicePreferencesFromJSON(json['devices']),
        'features': !exists(json, 'features') ? undefined : V1alpha1FeaturePreferencesFromJSON(json['features']),
        'firmware': !exists(json, 'firmware') ? undefined : V1alpha1FirmwarePreferencesFromJSON(json['firmware']),
        'machine': !exists(json, 'machine') ? undefined : V1alpha1MachinePreferencesFromJSON(json['machine']),
    };
}

export function V1alpha1VirtualMachinePreferenceSpecToJSON(value?: V1alpha1VirtualMachinePreferenceSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clock': V1alpha1ClockPreferencesToJSON(value.clock),
        'cpu': V1alpha1CPUPreferencesToJSON(value.cpu),
        'devices': V1alpha1DevicePreferencesToJSON(value.devices),
        'features': V1alpha1FeaturePreferencesToJSON(value.features),
        'firmware': V1alpha1FirmwarePreferencesToJSON(value.firmware),
        'machine': V1alpha1MachinePreferencesToJSON(value.machine),
    };
}

