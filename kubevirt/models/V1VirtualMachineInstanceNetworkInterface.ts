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
 * @interface V1VirtualMachineInstanceNetworkInterface
 */
export interface V1VirtualMachineInstanceNetworkInterface {
  /**
   * Specifies the origin of the interface data collected. values: domain, guest-agent, multus-status.
   * @type {string}
   * @memberof V1VirtualMachineInstanceNetworkInterface
   */
  infoSource?: string;
  /**
   * The interface name inside the Virtual Machine
   * @type {string}
   * @memberof V1VirtualMachineInstanceNetworkInterface
   */
  interfaceName?: string;
  /**
   * IP address of a Virtual Machine interface. It is always the first item of IPs
   * @type {string}
   * @memberof V1VirtualMachineInstanceNetworkInterface
   */
  ipAddress?: string;
  /**
   * List of all IP addresses of a Virtual Machine interface
   * @type {Array<string>}
   * @memberof V1VirtualMachineInstanceNetworkInterface
   */
  ipAddresses?: Array<string>;
  /**
   * Hardware address of a Virtual Machine interface
   * @type {string}
   * @memberof V1VirtualMachineInstanceNetworkInterface
   */
  mac?: string;
  /**
   * Name of the interface, corresponds to name of the network assigned to the interface
   * @type {string}
   * @memberof V1VirtualMachineInstanceNetworkInterface
   */
  name?: string;
  /**
   * Specifies how many queues are allocated by MultiQueue
   * @type {number}
   * @memberof V1VirtualMachineInstanceNetworkInterface
   */
  queueCount?: number;
}

export function V1VirtualMachineInstanceNetworkInterfaceFromJSON(
  json: any,
): V1VirtualMachineInstanceNetworkInterface {
  return V1VirtualMachineInstanceNetworkInterfaceFromJSONTyped(json, false);
}

export function V1VirtualMachineInstanceNetworkInterfaceFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1VirtualMachineInstanceNetworkInterface {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    infoSource: !exists(json, 'infoSource') ? undefined : json['infoSource'],
    interfaceName: !exists(json, 'interfaceName') ? undefined : json['interfaceName'],
    ipAddress: !exists(json, 'ipAddress') ? undefined : json['ipAddress'],
    ipAddresses: !exists(json, 'ipAddresses') ? undefined : json['ipAddresses'],
    mac: !exists(json, 'mac') ? undefined : json['mac'],
    name: !exists(json, 'name') ? undefined : json['name'],
    queueCount: !exists(json, 'queueCount') ? undefined : json['queueCount'],
  };
}

export function V1VirtualMachineInstanceNetworkInterfaceToJSON(
  value?: V1VirtualMachineInstanceNetworkInterface | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    infoSource: value.infoSource,
    interfaceName: value.interfaceName,
    ipAddress: value.ipAddress,
    ipAddresses: value.ipAddresses,
    mac: value.mac,
    name: value.name,
    queueCount: value.queueCount,
  };
}
