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
    V1TopologyHints,
    V1TopologyHintsFromJSON,
    V1TopologyHintsFromJSONTyped,
    V1TopologyHintsToJSON,
    V1VirtualMachineInstanceCondition,
    V1VirtualMachineInstanceConditionFromJSON,
    V1VirtualMachineInstanceConditionFromJSONTyped,
    V1VirtualMachineInstanceConditionToJSON,
    V1VirtualMachineInstanceGuestOSInfo,
    V1VirtualMachineInstanceGuestOSInfoFromJSON,
    V1VirtualMachineInstanceGuestOSInfoFromJSONTyped,
    V1VirtualMachineInstanceGuestOSInfoToJSON,
    V1VirtualMachineInstanceMigrationState,
    V1VirtualMachineInstanceMigrationStateFromJSON,
    V1VirtualMachineInstanceMigrationStateFromJSONTyped,
    V1VirtualMachineInstanceMigrationStateToJSON,
    V1VirtualMachineInstanceNetworkInterface,
    V1VirtualMachineInstanceNetworkInterfaceFromJSON,
    V1VirtualMachineInstanceNetworkInterfaceFromJSONTyped,
    V1VirtualMachineInstanceNetworkInterfaceToJSON,
    V1VirtualMachineInstancePhaseTransitionTimestamp,
    V1VirtualMachineInstancePhaseTransitionTimestampFromJSON,
    V1VirtualMachineInstancePhaseTransitionTimestampFromJSONTyped,
    V1VirtualMachineInstancePhaseTransitionTimestampToJSON,
    V1VolumeStatus,
    V1VolumeStatusFromJSON,
    V1VolumeStatusFromJSONTyped,
    V1VolumeStatusToJSON,
} from './';

/**
 * VirtualMachineInstanceStatus represents information about the status of a VirtualMachineInstance. Status may trail the actual state of a system.
 * @export
 * @interface V1VirtualMachineInstanceStatus
 */
export interface V1VirtualMachineInstanceStatus {
    /**
     * ActivePods is a mapping of pod UID to node name. It is possible for multiple pods to be running for a single VMI during migration.
     * @type {{ [key: string]: string; }}
     * @memberof V1VirtualMachineInstanceStatus
     */
    activePods?: { [key: string]: string; };
    /**
     * Conditions are specific points in VirtualMachineInstance's pod runtime.
     * @type {Array<V1VirtualMachineInstanceCondition>}
     * @memberof V1VirtualMachineInstanceStatus
     */
    conditions?: Array<V1VirtualMachineInstanceCondition>;
    /**
     * EvacuationNodeName is used to track the eviction process of a VMI. It stores the name of the node that we want to evacuate. It is meant to be used by KubeVirt core components only and can't be set or modified by users.
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    evacuationNodeName?: string;
    /**
     * FSFreezeStatus is the state of the fs of the guest it can be either frozen or thawed
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    fsFreezeStatus?: string;
    /**
     * 
     * @type {V1VirtualMachineInstanceGuestOSInfo}
     * @memberof V1VirtualMachineInstanceStatus
     */
    guestOSInfo?: V1VirtualMachineInstanceGuestOSInfo;
    /**
     * Interfaces represent the details of available network interfaces.
     * @type {Array<V1VirtualMachineInstanceNetworkInterface>}
     * @memberof V1VirtualMachineInstanceStatus
     */
    interfaces?: Array<V1VirtualMachineInstanceNetworkInterface>;
    /**
     * LauncherContainerImageVersion indicates what container image is currently active for the vmi.
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    launcherContainerImageVersion?: string;
    /**
     * Represents the method using which the vmi can be migrated: live migration or block migration
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    migrationMethod?: string;
    /**
     * 
     * @type {V1VirtualMachineInstanceMigrationState}
     * @memberof V1VirtualMachineInstanceStatus
     */
    migrationState?: V1VirtualMachineInstanceMigrationState;
    /**
     * This represents the migration transport
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    migrationTransport?: string;
    /**
     * NodeName is the name where the VirtualMachineInstance is currently running.
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    nodeName?: string;
    /**
     * Phase is the status of the VirtualMachineInstance in kubernetes world. It is not the VirtualMachineInstance status, but partially correlates to it.
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    phase?: string;
    /**
     * PhaseTransitionTimestamp is the timestamp of when the last phase change occurred
     * @type {Array<V1VirtualMachineInstancePhaseTransitionTimestamp>}
     * @memberof V1VirtualMachineInstanceStatus
     */
    phaseTransitionTimestamps?: Array<V1VirtualMachineInstancePhaseTransitionTimestamp>;
    /**
     * The Quality of Service (QOS) classification assigned to the virtual machine instance based on resource requirements See PodQOSClass type for available QOS classes More info: https://git.k8s.io/community/contributors/design-proposals/node/resource-qos.md
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    qosClass?: string;
    /**
     * A brief CamelCase message indicating details about why the VMI is in this state. e.g. 'NodeUnresponsive'
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    reason?: string;
    /**
     * RuntimeUser is used to determine what user will be used in launcher
     * @type {number}
     * @memberof V1VirtualMachineInstanceStatus
     */
    runtimeUser?: number;
    /**
     * 
     * @type {V1TopologyHints}
     * @memberof V1VirtualMachineInstanceStatus
     */
    topologyHints?: V1TopologyHints;
    /**
     * VirtualMachineRevisionName is used to get the vm revision of the vmi when doing an online vm snapshot
     * @type {string}
     * @memberof V1VirtualMachineInstanceStatus
     */
    virtualMachineRevisionName?: string;
    /**
     * VolumeStatus contains the statuses of all the volumes
     * @type {Array<V1VolumeStatus>}
     * @memberof V1VirtualMachineInstanceStatus
     */
    volumeStatus?: Array<V1VolumeStatus>;
}

export function V1VirtualMachineInstanceStatusFromJSON(json: any): V1VirtualMachineInstanceStatus {
    return V1VirtualMachineInstanceStatusFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1VirtualMachineInstanceStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activePods': !exists(json, 'activePods') ? undefined : json['activePods'],
        'conditions': !exists(json, 'conditions') ? undefined : ((json['conditions'] as Array<any>).map(V1VirtualMachineInstanceConditionFromJSON)),
        'evacuationNodeName': !exists(json, 'evacuationNodeName') ? undefined : json['evacuationNodeName'],
        'fsFreezeStatus': !exists(json, 'fsFreezeStatus') ? undefined : json['fsFreezeStatus'],
        'guestOSInfo': !exists(json, 'guestOSInfo') ? undefined : V1VirtualMachineInstanceGuestOSInfoFromJSON(json['guestOSInfo']),
        'interfaces': !exists(json, 'interfaces') ? undefined : ((json['interfaces'] as Array<any>).map(V1VirtualMachineInstanceNetworkInterfaceFromJSON)),
        'launcherContainerImageVersion': !exists(json, 'launcherContainerImageVersion') ? undefined : json['launcherContainerImageVersion'],
        'migrationMethod': !exists(json, 'migrationMethod') ? undefined : json['migrationMethod'],
        'migrationState': !exists(json, 'migrationState') ? undefined : V1VirtualMachineInstanceMigrationStateFromJSON(json['migrationState']),
        'migrationTransport': !exists(json, 'migrationTransport') ? undefined : json['migrationTransport'],
        'nodeName': !exists(json, 'nodeName') ? undefined : json['nodeName'],
        'phase': !exists(json, 'phase') ? undefined : json['phase'],
        'phaseTransitionTimestamps': !exists(json, 'phaseTransitionTimestamps') ? undefined : ((json['phaseTransitionTimestamps'] as Array<any>).map(V1VirtualMachineInstancePhaseTransitionTimestampFromJSON)),
        'qosClass': !exists(json, 'qosClass') ? undefined : json['qosClass'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'runtimeUser': !exists(json, 'runtimeUser') ? undefined : json['runtimeUser'],
        'topologyHints': !exists(json, 'topologyHints') ? undefined : V1TopologyHintsFromJSON(json['topologyHints']),
        'virtualMachineRevisionName': !exists(json, 'virtualMachineRevisionName') ? undefined : json['virtualMachineRevisionName'],
        'volumeStatus': !exists(json, 'volumeStatus') ? undefined : ((json['volumeStatus'] as Array<any>).map(V1VolumeStatusFromJSON)),
    };
}

export function V1VirtualMachineInstanceStatusToJSON(value?: V1VirtualMachineInstanceStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activePods': value.activePods,
        'conditions': value.conditions === undefined ? undefined : ((value.conditions as Array<any>).map(V1VirtualMachineInstanceConditionToJSON)),
        'evacuationNodeName': value.evacuationNodeName,
        'fsFreezeStatus': value.fsFreezeStatus,
        'guestOSInfo': V1VirtualMachineInstanceGuestOSInfoToJSON(value.guestOSInfo),
        'interfaces': value.interfaces === undefined ? undefined : ((value.interfaces as Array<any>).map(V1VirtualMachineInstanceNetworkInterfaceToJSON)),
        'launcherContainerImageVersion': value.launcherContainerImageVersion,
        'migrationMethod': value.migrationMethod,
        'migrationState': V1VirtualMachineInstanceMigrationStateToJSON(value.migrationState),
        'migrationTransport': value.migrationTransport,
        'nodeName': value.nodeName,
        'phase': value.phase,
        'phaseTransitionTimestamps': value.phaseTransitionTimestamps === undefined ? undefined : ((value.phaseTransitionTimestamps as Array<any>).map(V1VirtualMachineInstancePhaseTransitionTimestampToJSON)),
        'qosClass': value.qosClass,
        'reason': value.reason,
        'runtimeUser': value.runtimeUser,
        'topologyHints': V1TopologyHintsToJSON(value.topologyHints),
        'virtualMachineRevisionName': value.virtualMachineRevisionName,
        'volumeStatus': value.volumeStatus === undefined ? undefined : ((value.volumeStatus as Array<any>).map(V1VolumeStatusToJSON)),
    };
}

