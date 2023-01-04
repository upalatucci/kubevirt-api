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

import { exists } from '../runtime';
import {
  IoK8sApimachineryPkgApisMetaV1ObjectMeta,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON,
  IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON,
} from './';

/**
 * ControllerRevision implements an immutable snapshot of state data. Clients are responsible for serializing and deserializing the objects that contain their internal state. Once a ControllerRevision has been successfully created, it can not be updated. The API Server will fail validation of all requests that attempt to mutate the Data field. ControllerRevisions may, however, be deleted. Note that, due to its use by both the DaemonSet and StatefulSet controllers for update and rollback, this object is beta. However, it may be subject to name and representation changes in future releases, and clients should not depend on its stability. It is primarily for internal use by controllers.
 * @export
 * @interface IoK8sApiAppsV1ControllerRevision
 */
export interface IoK8sApiAppsV1ControllerRevision {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   * @type {string}
   * @memberof IoK8sApiAppsV1ControllerRevision
   */
  apiVersion?: string;
  /**
   * RawExtension is used to hold extensions in external versions.
   *
   * To use this, make a field which has RawExtension as its type in your external, versioned struct, and Object in your internal struct. You also need to register your various plugin types.
   *
   * // Internal package:
   *
   * 	type MyAPIObject struct {
   * 		runtime.TypeMeta `json:",inline"`
   * 		MyPlugin runtime.Object `json:"myPlugin"`
   * 	}
   *
   * 	type PluginA struct {
   * 		AOption string `json:"aOption"`
   * 	}
   *
   * // External package:
   *
   * 	type MyAPIObject struct {
   * 		runtime.TypeMeta `json:",inline"`
   * 		MyPlugin runtime.RawExtension `json:"myPlugin"`
   * 	}
   *
   * 	type PluginA struct {
   * 		AOption string `json:"aOption"`
   * 	}
   *
   * // On the wire, the JSON will look something like this:
   *
   * 	{
   * 		"kind":"MyAPIObject",
   * 		"apiVersion":"v1",
   * 		"myPlugin": {
   * 			"kind":"PluginA",
   * 			"aOption":"foo",
   * 		},
   * 	}
   *
   * So what happens? Decode first uses json or yaml to unmarshal the serialized data into your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked. The next step is to copy (using pkg/conversion) into the internal struct. The runtime package's DefaultScheme has conversion functions installed which will unpack the JSON stored in RawExtension, turning it into the correct object type, and storing it in the Object. (TODO: In the case where the object is of an unknown type, a runtime.Unknown object will be created and stored.)
   * @type {object}
   * @memberof IoK8sApiAppsV1ControllerRevision
   */
  data?: object;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   * @type {string}
   * @memberof IoK8sApiAppsV1ControllerRevision
   */
  kind?: string;
  /**
   *
   * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
   * @memberof IoK8sApiAppsV1ControllerRevision
   */
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  /**
   * Revision indicates the revision of the state represented by Data.
   * @type {number}
   * @memberof IoK8sApiAppsV1ControllerRevision
   */
  revision: number;
}

export function IoK8sApiAppsV1ControllerRevisionFromJSON(
  json: any,
): IoK8sApiAppsV1ControllerRevision {
  return IoK8sApiAppsV1ControllerRevisionFromJSONTyped(json, false);
}

export function IoK8sApiAppsV1ControllerRevisionFromJSONTyped(
  json: any,
  _ignoreDiscriminator: boolean,
): IoK8sApiAppsV1ControllerRevision {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    apiVersion: !exists(json, 'apiVersion') ? undefined : json['apiVersion'],
    data: !exists(json, 'data') ? undefined : json['data'],
    kind: !exists(json, 'kind') ? undefined : json['kind'],
    metadata: !exists(json, 'metadata')
      ? undefined
      : IoK8sApimachineryPkgApisMetaV1ObjectMetaFromJSON(json['metadata']),
    revision: json['revision'],
  };
}

export function IoK8sApiAppsV1ControllerRevisionToJSON(
  value?: IoK8sApiAppsV1ControllerRevision | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    apiVersion: value.apiVersion,
    data: value.data,
    kind: value.kind,
    metadata: IoK8sApimachineryPkgApisMetaV1ObjectMetaToJSON(value.metadata),
    revision: value.revision,
  };
}
