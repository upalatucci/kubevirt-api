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
 * VirtualMachineMemoryDumpRequest represent the memory dump request phase and info
 * @export
 * @interface V1VirtualMachineMemoryDumpRequest
 */
export interface V1VirtualMachineMemoryDumpRequest {
  /**
   * ClaimName is the name of the pvc that will contain the memory dump
   * @type {string}
   * @memberof V1VirtualMachineMemoryDumpRequest
   */
  claimName: string;
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   * @type {string}
   * @memberof V1VirtualMachineMemoryDumpRequest
   */
  endTimestamp?: string;
  /**
   * FileName represents the name of the output file
   * @type {string}
   * @memberof V1VirtualMachineMemoryDumpRequest
   */
  fileName?: string;
  /**
   * Message is a detailed message about failure of the memory dump
   * @type {string}
   * @memberof V1VirtualMachineMemoryDumpRequest
   */
  message?: string;
  /**
   * Phase represents the memory dump phase
   * @type {string}
   * @memberof V1VirtualMachineMemoryDumpRequest
   */
  phase: string;
  /**
   * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
   * @type {string}
   * @memberof V1VirtualMachineMemoryDumpRequest
   */
  startTimestamp?: string;
}

export function V1VirtualMachineMemoryDumpRequestFromJSON(
  json: any,
): V1VirtualMachineMemoryDumpRequest {
  return V1VirtualMachineMemoryDumpRequestFromJSONTyped(json, false);
}

export function V1VirtualMachineMemoryDumpRequestFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1VirtualMachineMemoryDumpRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    claimName: json['claimName'],
    endTimestamp: !exists(json, 'endTimestamp') ? undefined : json['endTimestamp'],
    fileName: !exists(json, 'fileName') ? undefined : json['fileName'],
    message: !exists(json, 'message') ? undefined : json['message'],
    phase: json['phase'],
    startTimestamp: !exists(json, 'startTimestamp') ? undefined : json['startTimestamp'],
  };
}

export function V1VirtualMachineMemoryDumpRequestToJSON(
  value?: V1VirtualMachineMemoryDumpRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    claimName: value.claimName,
    endTimestamp: value.endTimestamp === undefined ? undefined : value.endTimestamp,
    fileName: value.fileName,
    message: value.message,
    phase: value.phase,
    startTimestamp: value.startTimestamp === undefined ? undefined : value.startTimestamp,
  };
}
