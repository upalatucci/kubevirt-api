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
import {
  V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation,
  V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagationFromJSON,
  V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagationToJSON,
} from './';

/**
 * SSHPublicKeyAccessCredentialPropagationMethod represents the method used to inject a ssh public key into the vm guest. Only one of its members may be specified.
 * @export
 * @interface V1SSHPublicKeyAccessCredentialPropagationMethod
 */
export interface V1SSHPublicKeyAccessCredentialPropagationMethod {
  /**
   *
   * @type {object}
   * @memberof V1SSHPublicKeyAccessCredentialPropagationMethod
   */
  configDrive?: object;
  /**
   *
   * @type {object}
   * @memberof V1SSHPublicKeyAccessCredentialPropagationMethod
   */
  noCloud?: object;
  /**
   *
   * @type {V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation}
   * @memberof V1SSHPublicKeyAccessCredentialPropagationMethod
   */
  qemuGuestAgent?: V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagation;
}

export function V1SSHPublicKeyAccessCredentialPropagationMethodFromJSON(
  json: any,
): V1SSHPublicKeyAccessCredentialPropagationMethod {
  return V1SSHPublicKeyAccessCredentialPropagationMethodFromJSONTyped(json, false);
}

export function V1SSHPublicKeyAccessCredentialPropagationMethodFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1SSHPublicKeyAccessCredentialPropagationMethod {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    configDrive: !exists(json, 'configDrive') ? undefined : json['configDrive'],
    noCloud: !exists(json, 'noCloud') ? undefined : json['noCloud'],
    qemuGuestAgent: !exists(json, 'qemuGuestAgent')
      ? undefined
      : V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagationFromJSON(json['qemuGuestAgent']),
  };
}

export function V1SSHPublicKeyAccessCredentialPropagationMethodToJSON(
  value?: V1SSHPublicKeyAccessCredentialPropagationMethod | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    configDrive: value.configDrive,
    noCloud: value.noCloud,
    qemuGuestAgent: V1QemuGuestAgentSSHPublicKeyAccessCredentialPropagationToJSON(
      value.qemuGuestAgent,
    ),
  };
}
