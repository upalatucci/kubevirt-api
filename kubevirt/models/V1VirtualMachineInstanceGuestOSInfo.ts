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

import { exists } from '../runtime';
/**
 *
 * @export
 * @interface V1VirtualMachineInstanceGuestOSInfo
 */
export interface V1VirtualMachineInstanceGuestOSInfo {
  /**
   * Guest OS Id
   * @type {string}
   * @memberof V1VirtualMachineInstanceGuestOSInfo
   */
  id?: string;
  /**
   * Guest OS Kernel Release
   * @type {string}
   * @memberof V1VirtualMachineInstanceGuestOSInfo
   */
  kernelRelease?: string;
  /**
   * Kernel version of the Guest OS
   * @type {string}
   * @memberof V1VirtualMachineInstanceGuestOSInfo
   */
  kernelVersion?: string;
  /**
   * Machine type of the Guest OS
   * @type {string}
   * @memberof V1VirtualMachineInstanceGuestOSInfo
   */
  machine?: string;
  /**
   * Name of the Guest OS
   * @type {string}
   * @memberof V1VirtualMachineInstanceGuestOSInfo
   */
  name?: string;
  /**
   * Guest OS Pretty Name
   * @type {string}
   * @memberof V1VirtualMachineInstanceGuestOSInfo
   */
  prettyName?: string;
  /**
   * Guest OS Version
   * @type {string}
   * @memberof V1VirtualMachineInstanceGuestOSInfo
   */
  version?: string;
  /**
   * Version ID of the Guest OS
   * @type {string}
   * @memberof V1VirtualMachineInstanceGuestOSInfo
   */
  versionId?: string;
}

export function V1VirtualMachineInstanceGuestOSInfoFromJSON(
  json: any,
): V1VirtualMachineInstanceGuestOSInfo {
  return V1VirtualMachineInstanceGuestOSInfoFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceGuestOSInfoFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1VirtualMachineInstanceGuestOSInfo {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    kernelRelease: !exists(json, 'kernelRelease') ? undefined : json['kernelRelease'],
    kernelVersion: !exists(json, 'kernelVersion') ? undefined : json['kernelVersion'],
    machine: !exists(json, 'machine') ? undefined : json['machine'],
    name: !exists(json, 'name') ? undefined : json['name'],
    prettyName: !exists(json, 'prettyName') ? undefined : json['prettyName'],
    version: !exists(json, 'version') ? undefined : json['version'],
    versionId: !exists(json, 'versionId') ? undefined : json['versionId'],
  };
}

export function V1VirtualMachineInstanceGuestOSInfoToJSON(
  value?: V1VirtualMachineInstanceGuestOSInfo | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    kernelRelease: value.kernelRelease,
    kernelVersion: value.kernelVersion,
    machine: value.machine,
    name: value.name,
    prettyName: value.prettyName,
    version: value.version,
    versionId: value.versionId,
  };
}
