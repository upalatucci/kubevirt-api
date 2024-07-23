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
  K8sIoApimachineryPkgApisMetaV1ListMeta,
  K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON,
  K8sIoApimachineryPkgApisMetaV1ListMetaToJSON,
  V1beta1VirtualMachineClusterPreference,
  V1beta1VirtualMachineClusterPreferenceFromJSON,
  V1beta1VirtualMachineClusterPreferenceToJSON,
} from './';

/**
 * VirtualMachineClusterPreferenceList is a list of VirtualMachineClusterPreference resources.
 * @export
 * @interface V1beta1VirtualMachineClusterPreferenceList
 */
export interface V1beta1VirtualMachineClusterPreferenceList {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof V1beta1VirtualMachineClusterPreferenceList
   */
  apiVersion?: string;
  /**
   *
   * @type {Array<V1beta1VirtualMachineClusterPreference>}
   * @memberof V1beta1VirtualMachineClusterPreferenceList
   */
  items: Array<V1beta1VirtualMachineClusterPreference>;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof V1beta1VirtualMachineClusterPreferenceList
   */
  kind?: string;
  /**
   *
   * @type {K8sIoApimachineryPkgApisMetaV1ListMeta}
   * @memberof V1beta1VirtualMachineClusterPreferenceList
   */
  metadata?: K8sIoApimachineryPkgApisMetaV1ListMeta;
}

export function V1beta1VirtualMachineClusterPreferenceListFromJSON(
  json: any,
): V1beta1VirtualMachineClusterPreferenceList {
  return V1beta1VirtualMachineClusterPreferenceListFromJSONTyped(json, false);
}

export function V1beta1VirtualMachineClusterPreferenceListFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): V1beta1VirtualMachineClusterPreferenceList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    items: (json['items'] as Array<any>).map(V1beta1VirtualMachineClusterPreferenceFromJSON),
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : K8sIoApimachineryPkgApisMetaV1ListMetaFromJSON(json['metadata']),
  };
}

export function V1beta1VirtualMachineClusterPreferenceListToJSON(
  value?: V1beta1VirtualMachineClusterPreferenceList | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    items: (value.items as Array<any>).map(V1beta1VirtualMachineClusterPreferenceToJSON),
    kind: value.kind,
    metadata: K8sIoApimachineryPkgApisMetaV1ListMetaToJSON(value.metadata),
  };
}
